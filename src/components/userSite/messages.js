import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function Messages() {
  const { data } = useDemoData({
    dataSet: 'EventRequested',
    rowLength: 4,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        localeText={{
          toolbarDensity: 'Size',
          toolbarDensityLabel: 'Size',
          toolbarDensityCompact: 'Small',
          toolbarDensityStandard: 'Medium',
          toolbarDensityComfortable: 'Large',
        }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}