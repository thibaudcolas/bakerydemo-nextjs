from django.db import models
from grapple.models import (
    GraphQLCollection,
    GraphQLForeignKey,
    GraphQLImage,
    GraphQLPage,
    GraphQLStreamfield,
    GraphQLString,
    GraphQLTag,
)
from modelcluster.contrib.taggit import ClusterTaggableManager
from modelcluster.fields import ParentalKey
from taggit.models import TaggedItemBase
from wagtail.admin.panels import (
    FieldPanel,
    MultiFieldPanel,
    MultipleChooserPanel,
)
from wagtail_headless_preview.models import HeadlessMixin
from wagtail.fields import RichTextField, StreamField
from wagtail.models import Orderable, Page
from wagtail.search import index

from bakerydemo.base.blocks import BaseStreamBlock


class PopUpHomePage(HeadlessMixin, Page):
    """
    The Home Page. This looks slightly more complicated than it is. You can
    see if you visit your site and edit the homepage that it is split between
    a:
    - Hero area
    - Body area
    - A promotional area
    - Moveable featured site sections
    """

    # Hero section of HomePage
    image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        help_text="Homepage image",
    )
    hero_text = models.CharField(
        max_length=255, help_text="Write an introduction for the bakery"
    )
    hero_cta = models.CharField(
        verbose_name="Hero CTA",
        max_length=255,
        help_text="Text to display on Call to Action",
    )
    hero_cta_link = models.ForeignKey(
        "wagtailcore.Page",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        verbose_name="Hero CTA link",
        help_text="Choose a page to link to for the Call to Action",
    )

    # Body section of the HomePage
    body = StreamField(
        BaseStreamBlock(),
        verbose_name="Home content block",
        blank=True,
        use_json_field=True,
    )

    # Promo section of the HomePage
    promo_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        help_text="Promo image",
    )
    promo_title = models.CharField(
        blank=True, max_length=255, help_text="Title to display above the promo copy"
    )
    promo_text = RichTextField(
        null=True, blank=True, max_length=1000, help_text="Write some promotional copy"
    )

    # Featured sections on the HomePage
    # You will see on templates/base/home_page.html that these are treated
    # in different ways, and displayed in different areas of the page.
    # Each list their children items that we access via the children function
    # that we define on the individual Page models e.g. BlogIndexPage
    featured_section_1_title = models.CharField(
        blank=True, max_length=255, help_text="Title to display above the promo copy"
    )
    featured_section_1 = models.ForeignKey(
        "wagtailcore.Page",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        help_text="First featured section for the homepage. Will display up to "
        "three child items.",
        verbose_name="Featured section 1",
    )

    featured_section_2_title = models.CharField(
        blank=True, max_length=255, help_text="Title to display above the promo copy"
    )
    featured_section_2 = models.ForeignKey(
        "wagtailcore.Page",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        help_text="Second featured section for the homepage. Will display up to "
        "three child items.",
        verbose_name="Featured section 2",
    )

    featured_section_3_title = models.CharField(
        blank=True, max_length=255, help_text="Title to display above the promo copy"
    )
    featured_section_3 = models.ForeignKey(
        "wagtailcore.Page",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        help_text="Third featured section for the homepage. Will display up to "
        "six child items.",
        verbose_name="Featured section 3",
    )

    content_panels = Page.content_panels + [
        MultiFieldPanel(
            [
                FieldPanel("image"),
                FieldPanel("hero_text"),
                MultiFieldPanel(
                    [
                        FieldPanel("hero_cta"),
                        FieldPanel("hero_cta_link"),
                    ]
                ),
            ],
            heading="Hero section",
        ),
        MultiFieldPanel(
            [
                FieldPanel("promo_image"),
                FieldPanel("promo_title"),
                FieldPanel("promo_text"),
            ],
            heading="Promo section",
        ),
        FieldPanel("body"),
        MultiFieldPanel(
            [
                MultiFieldPanel(
                    [
                        FieldPanel("featured_section_1_title"),
                        FieldPanel("featured_section_1"),
                    ]
                ),
                MultiFieldPanel(
                    [
                        FieldPanel("featured_section_2_title"),
                        FieldPanel("featured_section_2"),
                    ]
                ),
                MultiFieldPanel(
                    [
                        FieldPanel("featured_section_3_title"),
                        FieldPanel("featured_section_3"),
                    ]
                ),
            ],
            heading="Featured homepage sections",
        ),
    ]
    graphql_fields = [
        GraphQLImage("image"),
        GraphQLStreamfield("body"),
        GraphQLString("hero_text"),
        GraphQLString("hero_cta"),
        GraphQLPage("hero_cta_link"),
        GraphQLImage("promo_image"),
        GraphQLString("promo_title"),
        GraphQLString("promo_text"),
        GraphQLString("featured_section_1_title"),
        GraphQLPage("featured_section_1"),
        GraphQLString("featured_section_2_title"),
        GraphQLPage("featured_section_2"),
        GraphQLString("featured_section_3_title"),
        GraphQLPage("featured_section_3"),
    ]

    def __str__(self):
        return self.title


class PopUpBlogPersonRelationship(Orderable, models.Model):
    """
    This defines the relationship between the `Person` within the `base`
    app and the BlogPage below. This allows people to be added to a BlogPage.

    We have created a two way relationship between BlogPage and Person using
    the ParentalKey and ForeignKey
    """

    page = ParentalKey(
        "PopUpBlogPage",
        related_name="popup_blog_person_relationship",
        on_delete=models.CASCADE,
    )
    person = models.ForeignKey(
        "base.Person",
        related_name="person_popup_blog_relationship",
        on_delete=models.CASCADE,
    )
    panels = [FieldPanel("person")]

    graphql_fields = [GraphQLForeignKey("person", "base.Person")]


class PopUpBlogPageTag(TaggedItemBase):
    content_object = ParentalKey(
        "PopUpBlogPage", related_name="popup_tagged_items", on_delete=models.CASCADE
    )


class PopUpBlogPage(HeadlessMixin, Page):
    parent_page_types = ["PopUpBlogIndexPage"]
    subpage_types = []

    introduction = models.TextField(help_text="Text to describe the page", blank=True)
    image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        help_text="Landscape mode only; horizontal width between 1000px and 3000px.",
    )
    body = StreamField(
        BaseStreamBlock(), verbose_name="Page body", blank=True, use_json_field=True
    )
    subtitle = models.CharField(blank=True, max_length=255)
    tags = ClusterTaggableManager(through=PopUpBlogPageTag, blank=True)
    date_published = models.DateField("Date article published", blank=True, null=True)

    content_panels = Page.content_panels + [
        FieldPanel("subtitle"),
        FieldPanel("introduction"),
        FieldPanel("image"),
        FieldPanel("body"),
        FieldPanel("date_published"),
        MultipleChooserPanel(
            "popup_blog_person_relationship",
            chooser_field_name="person",
            heading="Authors",
            label="Author",
            panels=None,
            min_num=1,
        ),
        FieldPanel("tags"),
    ]

    graphql_fields = [
        GraphQLString("introduction"),
        GraphQLImage("image"),
        GraphQLStreamfield("body"),
        GraphQLString("subtitle"),
        GraphQLTag("tags"),
        GraphQLString("date_published"),
        GraphQLForeignKey(
            "authors",
            "base.Person",
            is_list=True,
            source="authors",
        ),
    ]

    search_fields = Page.search_fields + [
        index.SearchField("body"),
    ]

    def authors(self, *args, **kwargs):
        """
        Returns the BlogPage's related people. Again note that we are using
        the ParentalKey's related_name from the BlogPersonRelationship model
        to access these objects. This allows us to access the Person objects
        with a loop on the template. If we tried to access the blog_person_
        relationship directly we'd print `blog.BlogPersonRelationship.None`
        """
        # Only return authors that are not in draft
        return [
            n.person
            for n in self.popup_blog_person_relationship.filter(
                person__live=True
            ).select_related("person")
        ]


class PopUpBlogIndexPage(HeadlessMixin, Page):
    parent_page_types = ["PopUpHomePage"]
    subpage_types = ["PopUpBlogPage"]

    introduction = models.TextField(help_text="Text to describe the page", blank=True)
    image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        help_text="Landscape mode only; horizontal width between 1000px and 3000px.",
    )

    content_panels = Page.content_panels + [
        FieldPanel("introduction"),
        FieldPanel("image"),
    ]

    graphql_fields = [
        GraphQLString("introduction"),
        GraphQLImage("image"),
    ]

    # Defines a method to access the children of the page (e.g. BlogPage
    # objects). On the demo site we use this on the HomePage
    def children(self):
        return self.get_children().specific().live()

    # Overrides the context to list all child items, that are live, by the
    # date that they were published
    # https://docs.wagtail.org/en/stable/getting_started/tutorial.html#overriding-context
    def get_context(self, request):
        context = super(PopUpBlogIndexPage, self).get_context(request)
        context["posts"] = (
            PopUpBlogPage.objects.descendant_of(self).live().order_by("-date_published")
        )
        return context
