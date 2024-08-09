import * as React from 'react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import MailIcon from '@mui/icons-material/Mail';
import './BuildingTreeView.css';

const data = {
  id: 'root',
  title: 'پروژه ها',
  children: [
    {
      id: '65cf312d52c2c25b64f56910',
      title: 'ساختمان',
      children: [
        {
          id: '65cf317a52c2c25b64f5691c',
          title: 'وب اپلیکیشن',
          children: []
        },
        {
          id: '65cf318f52c2c25b64f56920',
          title: 'حل مسائل',
          children: [
            {
              id: '65cf31b652c2c25b64f56924',
              title: 'مسئله شماره یک و دو',
              children: []
            }
          ]
        }
      ]
    },
    {
      id: '65cf315252c2c25b64f56914',
      title: 'به سوی ظهور',
      children: [
        {
          id: '65cf31df52c2c25b64f56928',
          title: 'آخرالزمان',
          children: []
        }
      ]
    },
    {
      id: '65cf320f52c2c25b64f5692c',
      title: 'بدون زیر پروژه',
      children: []
    }
  ],
};


const renderTreeItems = (node) => {
  return (
    <TreeItem
      key={node.id}
      itemId={node.id}
      label={node.title}
      icon={MailIcon} 
    >
      {node.children && node.children.length > 0 && (
        <>
          {node.children.map(child => renderTreeItems(child))}
        </>
      )}
    </TreeItem>
  );
};

const BuildingTreeView = () => {
  const [selectedItemId, setSelectedItemId] = React.useState(null);
  const [parentItemId, setParentItemId] = React.useState(null);

  const handleItemClick = (itemId, parentId) => {
    setSelectedItemId(itemId);
    setParentItemId(parentId);
  };

  return (
    <div className='TreeBox'>
      <SimpleTreeView>
        {renderTreeItems(data)}
      </SimpleTreeView>
    </div>
  );
};

export default BuildingTreeView;
