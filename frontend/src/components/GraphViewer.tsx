import { useEffect, useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import cytoscape from 'cytoscape';
import fcose from 'cytoscape-fcose';
import { fetchGraph } from '../api/mockApi';
import Loader from './Loader';

cytoscape.use(fcose);

const GraphViewer = () => {
  const [elements, setElements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGraph().then((g) => {
      setElements([...g.nodes, ...g.edges]);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  const stylesheet = [
    {
      selector: 'node[type="dish"]',
      style: { 'background-color': '#FB923C', label: 'data(label)', color: '#fff', 'text-valign': 'center', 'font-size': 10 },
    },
    {
      selector: 'node[type="ingredient"]',
      style: { 'background-color': '#4ADE80', label: 'data(label)', 'font-size': 9 },
    },
    {
      selector: 'node[type="cuisine"]',
      style: { 'background-color': '#60A5FA', label: 'data(label)', 'font-size': 9 },
    },
    {
      selector: 'edge',
      style: { width: 1, 'line-color': '#CBD5E1', 'curve-style': 'bezier', 'target-arrow-shape': 'triangle' },
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow" style={{ height: '70vh' }}>
      <CytoscapeComponent
        elements={elements}
        layout={{ name: 'fcose', animate: true }}
        stylesheet={stylesheet}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default GraphViewer;
