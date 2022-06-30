import { Suspense } from "react";

const ImgSuspense = (props: { src: string, alt?: string, className?: string}) => {
  const {src, alt, className} = props

  return (
    <Suspense>
      <img src={src} alt={alt && alt} className={className && className} />
    </Suspense>
  );
}

export default ImgSuspense;
