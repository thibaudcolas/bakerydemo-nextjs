from wagtail.blocks import (
    CharBlock,
    ChoiceBlock,
    RichTextBlock,
    StreamBlock,
    StructBlock,
    TextBlock,
)
from wagtail.embeds.blocks import EmbedBlock
from wagtail.images.blocks import ImageChooserBlock
from grapple.helpers import register_streamfield_block
from grapple.models import GraphQLImage, GraphQLString


@register_streamfield_block
class ImageBlock(StructBlock):
    """
    Custom `StructBlock` for utilizing images with associated caption and
    attribution data
    """

    image = ImageChooserBlock(required=True)
    caption = CharBlock(required=False)
    attribution = CharBlock(required=False)

    graphql_fields = [
        GraphQLImage("image"),
        GraphQLString("caption"),
        GraphQLString("attribution"),
    ]

    class Meta:
        icon = "image"
        template = "blocks/image_block.html"


@register_streamfield_block
class HeadingBlock(StructBlock):
    """
    Custom `StructBlock` that allows the user to select h2 - h4 sizes for headers
    """

    heading_text = CharBlock(classname="title", required=True)
    size = ChoiceBlock(
        choices=[
            ("", "Select a header size"),
            ("h2", "H2"),
            ("h3", "H3"),
            ("h4", "H4"),
        ],
        blank=True,
        required=False,
    )

    graphql_fields = [
        GraphQLString("heading_text"),
        GraphQLString("size"),
    ]

    class Meta:
        icon = "title"
        template = "blocks/heading_block.html"


@register_streamfield_block
class BlockQuote(StructBlock):
    """
    Custom `StructBlock` that allows the user to attribute a quote to the author
    """

    text = TextBlock()
    attribute_name = CharBlock(blank=True, required=False, label="e.g. Mary Berry")

    graphql_fields = [
        GraphQLString("text"),
        GraphQLString("attribute_name"),
    ]

    class Meta:
        icon = "openquote"
        template = "blocks/blockquote.html"


@register_streamfield_block
class BaseStreamBlock(StreamBlock):
    """
    Define the custom blocks that `StreamField` will utilize
    """

    heading_block = HeadingBlock()
    paragraph_block = RichTextBlock(
        icon="pilcrow", template="blocks/paragraph_block.html"
    )
    image_block = ImageBlock()
    block_quote = BlockQuote()
    embed_block = EmbedBlock(
        help_text="Insert an embed URL e.g https://www.youtube.com/watch?v=SGJFWirQ3ks",
        icon="media",
        template="blocks/embed_block.html",
    )
