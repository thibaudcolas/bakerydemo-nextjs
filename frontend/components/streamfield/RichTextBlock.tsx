export interface RichTextBlockType {
  id: string;
  blockType: 'RichTextBlock';
  value: string;
}

export default function RichTextBlock({ block }: { block: RichTextBlockType }) {
  return <div dangerouslySetInnerHTML={{ __html: block.value }} />;
}
