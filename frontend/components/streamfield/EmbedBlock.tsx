export interface EmbedBlockType {
  id: string;
  blockType: 'EmbedBlock';
  embed: string;
}

export default function EmbedBlock({ block }: { block: EmbedBlockType }) {
  return <div dangerouslySetInnerHTML={{ __html: block.embed }} />;
}
