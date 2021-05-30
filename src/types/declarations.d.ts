declare module "*.scss"
{
    const content: {[className: string]: string};
    export = content;
}

declare module '*.svg' {
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}