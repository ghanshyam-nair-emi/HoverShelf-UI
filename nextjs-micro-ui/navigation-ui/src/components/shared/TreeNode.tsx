import { Check, ChevronDown, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

import TreeNodeProps from './interface/TreeNodeProps';

const TreeNode: React.FC<TreeNodeProps> = ({ 
    name, 
    data, 
    path, 
    expandedNodes, 
    selectedNodes, 
    onToggleExpand, 
    onToggleSelect, 
    level = 0 
}) => {
    const hasChildren = data && typeof data === 'object' && Object.keys(data).length > 0;
    const isExpanded = expandedNodes.has(path);
    const isSelected = selectedNodes.has(path);
    const isPartiallySelected = !isSelected && Array.from(selectedNodes).some(selectedPath =>
        (selectedPath as string).startsWith(path + '.') || path.startsWith((selectedPath as string) + '.')
    );

    const handleToggleExpand = () => {
        if (hasChildren) {
            onToggleExpand(path);
        }
    };

    const handleToggleSelect = (e: React.MouseEvent) => {
        e.stopPropagation();
        onToggleSelect(path);
    };

    const getCheckboxState = () => {
        if (isSelected) return 'checked';
        if (isPartiallySelected) return 'partial';
        return 'unchecked';
    };

    const checkboxState = getCheckboxState();

    return (
        <div className="tree-node">
            <div
                className={`tree-node-item ${
                    level === 0 ? 'tree-node-item--level-0' : 
                    level === 1 ? 'tree-node-item--level-1' : ''
                }`}
                style={{ paddingLeft: `${level * 20 + 8}px` }}
                onClick={handleToggleExpand}
            >
                <div className="tree-node-content">
                    {hasChildren && (
                        <div className="tree-node-chevron">
                            {isExpanded ? (
                                <ChevronDown size={16} />
                            ) : (
                                <ChevronRight size={16} />
                            )}
                        </div>
                    )}
                    {!hasChildren && <div className="tree-node-spacer"></div>}

                    <div
                        className="tree-node-checkbox-container"
                        onClick={handleToggleSelect}
                    >
                        <div
                            className={`tree-node-checkbox tree-node-checkbox--${checkboxState}`}
                        >
                            {checkboxState === 'checked' && (
                                <Check size={12} className="tree-node-checkbox-check" />
                            )}
                            {checkboxState === 'partial' && (
                                <div className="tree-node-checkbox-partial-indicator"></div>
                            )}
                        </div>
                    </div>

                    <span className="tree-node-text">{name}</span>
                </div>
            </div>

            {hasChildren && isExpanded && (
                <div>
                    {Object.entries(data).map(([childName, childData]) => (
                        <TreeNode
                            key={childName}
                            name={childName}
                            data={childData}
                            path={path ? `${path}.${childName}` : childName}
                            expandedNodes={expandedNodes}
                            selectedNodes={selectedNodes}
                            onToggleExpand={onToggleExpand}
                            onToggleSelect={onToggleSelect}
                            level={level + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
export default TreeNode;