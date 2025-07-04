import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';


const dataset = [
  { x: 'March', y: 10.2 },
  { x: 'April', y: 14.5 },
  { x: 'May', y: 15.5 },
  { x: 'June', y: 12.0 }, 
];


const arrivalData = [4000, 3000, 2000, 2500];
const spendingData = [2400, 1398, 9800, 3908];
const xLabels = ['March', 'April', 'May', 'June'];


const pieData = [
  { value: 77, label: 'Earned', color: '#3b82f6' }, 
  { value: 23, label: 'Spend', color: '#93c5fd' }, 
];

const size = {
  width: 200,
  height: 200,
};


const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 16,
}));


const ChartOverlay = styled('div')({
  position: 'absolute',
  top: '10px',
  right: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#ffffff', 
  zIndex: 10, 
});


const PieLabels = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '10px',
});


const AtmCard = styled('div')({
  background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
  color: 'white',
  borderRadius: '12px',
  padding: '20px',
  width: '100%',
  maxWidth: '350px',
  height: '200px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  animation: 'fadeIn 1s ease-in-out',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
});

const Chip = styled('div')({
  width: '40px',
  height: '30px',
  background: '#FFD700',
  borderRadius: '4px',
  position: 'absolute',
  top: '20px',
  left: '20px',
  animation: 'scaleIn 0.5s ease-in-out 0.2s forwards',
  transform: 'scale(0)',
  zIndex: 10, 
  '@keyframes scaleIn': {
    to: { transform: 'scale(1)' },
  },
});

const CardText = styled('div')({
  fontFamily: 'monospace',
  fontSize: '16px',
  marginTop: '60px',
  animation: 'slideIn 0.8s ease-in-out 0.4s forwards',
  opacity: 0,
  zIndex: 10, 
  '@keyframes slideIn': {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
});

const CardName = styled('div')({
  fontSize: '14px',
  marginTop: '20px',
  animation: 'slideIn 0.8s ease-in-out 0.6s forwards',
  opacity: 0,
  zIndex: 10, 
  '@keyframes slideIn': {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
});

const CardExpiry = styled('div')({
  fontSize: '12px',
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  animation: 'slideIn 0.8s ease-in-out 0.8s forwards',
  opacity: 0,
  zIndex: 10, 
  '@keyframes slideIn': {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
});

const ChartBackground = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0.4, 
  zIndex: 0, 
});

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function CombinedCharts() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Overview
      </h1>

      <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
       
        <div className="bg-white p-6  rounded-[25px] shadow-md flex justify-center items-center">
          <AtmCard>
            <Chip />
            <CardText>XXXX XXXX XXXX 1234</CardText>
            <CardName>John Doe</CardName>
            <CardExpiry>Exp: 12/27</CardExpiry>
          </AtmCard>
        </div>

       
        <div className="bg-white p-6  rounded-[16px] shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Exchange Rate</h2>
          <LineChart
            dataset={dataset}
            xAxis={[{ dataKey: 'x', scaleType: 'band' }]}
            series={[
              {
                dataKey: 'y',
                label: 'Values',
                color: '#3b82f6',
                curve: 'linear',
              },
            ]}
            yAxis={[{ tickValues: [10.2, 14.5, 15.5], min: 8, max: 18 }]}
            height={200}
            grid={{ vertical: true, horizontal: true }}
            sx={{
              '& .MuiLineElement-root': {
                strokeDasharray: '10, 5',
                animation: 'drawLine 1.5s ease-in-out forwards',
              },
              '& .MuiAxis-root': {
                stroke: '#888',
              },
              '& .MuiAxis-tickLabel': {
                fill: '#444',
              },
              '@keyframes drawLine': {
                from: { strokeDashoffset: '100%' },
                to: { strokeDashoffset: '0' },
              },
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        <div className="bg-white p-6  rounded-[16px] shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Last Costs</h2>
          <div className="w-full overflow-x-auto">
            <BarChart
              height={300}
              series={[
                { data: arrivalData, label: 'Arrival', id: 'arrivalId', color: '#3b82f6' },
                { data: spendingData, label: 'Spending', id: 'spendingId', color: '#93c5fd' },
              ]}
              xAxis={[{ data: xLabels, scaleType: 'band' }]}
              yAxis={[{ tickNumber: 3, min: 0, max: 10000 }]}
              slotProps={{
                bar: { style: { width: '10px', margin: '1px' } },
              }}
              sx={{
                '& .MuiBarElement-root': {
                  transform: 'scaleY(0)',
                  transformOrigin: 'bottom',
                  animation: 'growBar 1s ease-out forwards',
                },
                '@keyframes growBar': {
                  to: { transform: 'scaleY(1)' },
                },
              }}
            />
          </div>
        </div>

     
        <div className="bg-white p-6  rounded-[16px] shadow-md flex justify-center">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Efficiency</h2>
            <PieChart
              series={[
                {
                  data: pieData,
                  innerRadius: 80,
                  startAngle: -90,
                  endAngle: 270,
                  cx: 100,
                  cy: 100,
                },
              ]}
              {...size}
              sx={{
                '& .MuiPieArc-root': {
                  transform: 'scale(0)',
                  transformOrigin: 'center',
                  animation: 'growSlice 0.8s ease-out forwards',
                },
                '@keyframes growSlice': {
                  to: { transform: 'scale(1)' },
                },
              }}
            >
              <PieCenterLabel>$5200 or 77%</PieCenterLabel>
            </PieChart>
            <PieLabels>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#3b82f6] rounded-full"></div>
                <span className="text-sm font-medium">Earned</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#93c5fd] rounded-full"></div>
                <span className="text-sm font-medium">Spend</span>
              </div>
            </PieLabels>
          </div>
        </div>
      </div>
    </div>
  );
}
