type IPrimaryLayout = {
  children: React.ReactNode;
};
export default function PrimaryLayout(Prop: IPrimaryLayout): JSX.Element {
  return <div>{Prop.children}</div>;
}
