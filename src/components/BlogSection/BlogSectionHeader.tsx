/** Section header with tag, title and description. */
export function BlogSectionHeader(props: {
  tag: string;
  title: string;
  titleId: string;
  description: string;
}) {
  return (
    <header className="flex max-w-[700px] flex-col items-center gap-6 text-center">
      <span className="font-tags text-sm font-medium uppercase tracking-[1px] text-brand">
        {props.tag}
      </span>
      <div className="flex flex-col gap-2.5">
        <h2
          id={props.titleId}
          className="font-title text-3xl font-medium capitalize lg:leading-[72px] text-gray-50 md:text-5xl lg:text-[60px]"
        >
          {props.title}
        </h2>
        <p className="font-sans text-base font-light leading-[26px] text-nav-text lg:text-lg">
          {props.description}
        </p>
      </div>
    </header>
  );
}
