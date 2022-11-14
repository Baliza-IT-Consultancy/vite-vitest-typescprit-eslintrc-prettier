type IPrimaryLayout = {
  children: React.ReactNode;
};
export default function PrimaryLayout(prop: IPrimaryLayout): JSX.Element {
  return <div>{prop.children}</div>;
}
