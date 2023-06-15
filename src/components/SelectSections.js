import React, { useState } from 'react'
import Card from './Card';
import { Box,Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SelectSections = () => {
    const [items, setItems] = useState([
        {
            parameters: "Profile Summary",
            description: "Gives Summary Of You profile",
            edit: false,
            isdisplay: true
        },
        {
            parameters: "Academic and Cocurricular Achievements",
            description: "Mention your achievements apart from studies",
            edit: false,
            isdisplay: true


        },
        {
            parameters: "Summer Internship Experience",
            description: "add your summer internship experience if you have any",
            edit: false,
            isdisplay: true
        },
        {
            parameters: "Work Experience",
            description: "add if there is any work experience of yours",
            edit: false,
            isdisplay: true
        },
        {
            parameters: "Projects",
            description: "add if you have any projects of your own",
            edit: false,
            isdisplay: true
        },
        {
            parameters: "Certificates",
            description: "mention the certificates you have got so far",
            edit: false,
            isdisplay: true
        },
        {
            parameters: "Leadership Positions",
            description: "mention your leadership qualities",
            edit: false,
            isdisplay: true
        },
        {
            parameters: "Extracurricular",
            description: "add your extracurricular activities",
            edit: false,
            isdisplay: true
        },
        {
            parameters: "Education",
            description: "Give your education details",
            edit: false,
            isdisplay: true
        }





    ])
    const setEdit = (params, index) => {
        const updateItems = [...items]
        updateItems[index].edit = params

        setItems(updateItems)


    }
    const updateParams = (index, newparams) => {
        const updateData = [...items]
        updateData[index].parameters = newparams

        setItems(updateData)
    }

    const updateDisplay = (index) => {
        const updateData = [...items]
        updateData[index].isdisplay= !updateData[index].isdisplay

        setItems(updateData)
    }

    const handleDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
    
        const updatedItems = Array.from(items);
        const [removed] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, removed);
    
        setItems(updatedItems);
      };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
      <Box>
        <Typography>
          <h1>Select Your Sections</h1>
        </Typography>
      </Box>
      <Box sx={{ width: '53vw' }}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="card-list">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={item.parameters} draggableId={item.parameters} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Card {...item} index={index} setEdit={setEdit} updateDisplay={updateDisplay} updateParams={updateParams} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
      <Box>
        <Button variant="contained" sx={{ backgroundColor: '#8A4893', textTransform: 'none', width: "28vw", height: "52px", borderRadius: "10px", top: "32px" }}>
          Save and Next
        </Button>
      </Box>
    </Box>
  );
};

export default SelectSections
