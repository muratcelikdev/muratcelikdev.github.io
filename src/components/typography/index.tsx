import { useMemo } from 'react';

import * as S from 'src/components/typography/index.styles';

type FontType =
  | 'heading'
  | 'subheading1'
  | 'subheading2'
  | 'paragraph1'
  | 'paragraph2'
  | 'paragraph3'
  | 'paragraph4';

export interface TypographyProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  type: FontType;
}

const Typography = ({ children, className, type }: TypographyProps) => {
  const Component = useMemo(() => {
    switch (type) {
      case 'heading': {
        return S.Heading;
      }
      case 'subheading1': {
        return S.Subheading1;
      }
      case 'subheading2': {
        return S.Subheading2;
      }
      case 'paragraph1': {
        return S.Paragraph1;
      }
      case 'paragraph2': {
        return S.Paragraph2;
      }
      case 'paragraph3': {
        return S.Paragraph3;
      }
      case 'paragraph4': {
        return S.Paragraph4;
      }
    }
  }, [type]);

  return <Component className={className}>{children}</Component>;
};

export default Typography;
