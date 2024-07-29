export interface HeadingBlockType {
  id: string;
  blockType: 'HeadingBlock';
  headingText: string;
  size: 'h2' | 'h3' | 'h4';
}

export default function HeadingBlock({ block }: { block: HeadingBlockType }) {
  switch (block.size) {
    case 'h2':
      return <h2>{block.headingText}</h2>;
    case 'h3':
      return <h3>{block.headingText}</h3>;
    case 'h4':
      return <h3>{block.headingText}</h3>;
    default:
      return <p>Unsupported: {block.size}</p>;
  }
}
