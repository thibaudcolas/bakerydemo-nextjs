export interface BlockQuoteType {
  id: string;
  blockType: 'BlockQuote';
  text: string;
  attributeName: string;
}

export default function BlockQuote({ block }: { block: BlockQuoteType }) {
  return (
    <blockquote>
      <p className="text">{block.text}</p>
      <p className="attribute-name">{block.attributeName}</p>
    </blockquote>
  );
}
