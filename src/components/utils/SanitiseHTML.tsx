import DOMPurify from 'dompurify';

interface SanitiseHTMLProps {
  html: string;
}

function SanitiseHTML({ html }: SanitiseHTMLProps) {
  // Unfortunately, it is not possible to render the HTML without using an intermediate tag
  // See https://github.com/facebook/react/issues/12014
  return (
    <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}></span>
  );
}

export default SanitiseHTML;
