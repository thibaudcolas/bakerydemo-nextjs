import BlockQuote, { BlockQuoteType } from './BlockQuote';
import EmbedBlock, { EmbedBlockType } from './EmbedBlock';
import HeadingBlock, { HeadingBlockType } from './HeadingBlock';
import ImageBlock, { ImageBlockType } from './ImageBlock';
import RichTextBlock, { RichTextBlockType } from './RichTextBlock';

export type BaseStreamBlockType =
  | HeadingBlockType
  | RichTextBlockType
  | ImageBlockType
  | BlockQuoteType
  | EmbedBlockType;

interface BaseStreamBlockProps {
  blocks: ReadonlyArray<BaseStreamBlockType>;
}

export default function BaseStreamBlock({ blocks }: BaseStreamBlockProps) {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'HeadingBlock':
            return <HeadingBlock key={index} block={block} />;
          case 'RichTextBlock':
            return <RichTextBlock key={index} block={block} />;
          case 'ImageBlock':
            return <ImageBlock key={index} block={block} />;
          case 'BlockQuote':
            return <BlockQuote key={index} block={block} />;
          case 'EmbedBlock':
            return <EmbedBlock key={index} block={block} />;
          default:
            return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>;
        }
      })}
    </div>
  );
}
