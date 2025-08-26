interface TreeNodeProps {
    name: string;
    data: any;
    path: string;
    expandedNodes: Set<string>;
    selectedNodes: Set<string>;
    onToggleExpand: (path: string) => void;
    onToggleSelect: (path: string) => void;
    level?: number;
}
export default TreeNodeProps;