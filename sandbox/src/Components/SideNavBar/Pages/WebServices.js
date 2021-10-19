import React, { useEffect, useState } from 'react';
import AddNewContact from './AddContact';
import ContactCard from './ContactCard';
import { appserverApi } from '../../../serverapi/contactsApi';
import { WebServiceData } from '../SidebarData';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import * as FcIcons from 'react-icons/fc';


const WebServices = (props) => {
     
    const [svc, setSvc] = useState([]);


    useEffect(() =>
        {
            const getSvcs =  async () =>
            {
                var svcdata = await getServices();
                if(svcdata)
                {
                    setSvc(svcdata);
                }
            };

            getSvcs();

        }, []);

  const getServices = async () =>
  {
      const response = await appserverApi.get("/projects");
      console.log('contacts are ' + response.data);
      return response.data;
  };


    
       

    // return(        
    //     <div>           
    //         <div>
    //             <h2 style={{textAlign:'center', margin:'25px'}}>WebServices List</h2>
    //         </div>
    //         <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'25px'}}>
    //          {rendereach()}
    //          </div>
    //     </div>
    // );

    
        const renderTree = () => {
         
         return(
         WebServiceData.map((eachproject) =>
         {
             console.log("Project Name " + eachproject.Name);
             return(
            <TreeItem key={eachproject.Name} nodeId={eachproject.Name} label={eachproject.Name} >
                {eachproject.ServiceDetails.map((service) => renderTreeServiceItem(service, eachproject.Name))}
            </TreeItem>);
         })
         );
        };

        const renderTreeServiceItem = (svcNode, parentName) =>
        {
            console.log("Service Name " + svcNode.Name);
            var nodeID = parentName + "/" + svcNode.Name
            return(
                <TreeItem key={svcNode.Name} nodeId={nodeID} label={svcNode.Name}  >
                    {svcNode.OperationDetails.map((op) => renderTreeOpItem(op, nodeID))}
                </TreeItem>);
        };

        const renderTreeOpItem = (opItem, parentID) =>
        {
            var nodeID = parentID + "/" + opItem.Name
            console.log("Operation Name " + opItem.Name);
            return(
                <TreeItem key={opItem.Name} nodeId={nodeID} label={opItem.Name} sx={{ height:'25px'}} onClick={(e) => onOperationSelected(nodeID)}>                    
                </TreeItem>);
        };

        const onOperationSelected = async (nodeID) =>
        {
            console.log("Current Operation " + nodeID);

            // var res = await getXMLRequest(nodeID);
            // if(res)
            // {
            //     setResponse(res);
            // }
        }
      
        return (
          <div style={{display:'flex',  left:'200', margin:'60px',  flexDirection: 'row'  }}>
          <TreeView
            aria-label="rich object"
            defaultCollapseIcon={<FcIcons.FcCollapse />}           
            defaultExpandIcon={<FcIcons.FcExpand />} sx={{height: '100vh',width:'400px', overflowY: 'auto', backgroundColor:'#fff'}}>               
            {renderTree()}
          </TreeView>
           <textarea style={{ marginLeft: '20px', height: '400px', width: '600px'}}></textarea>
           <button className="wspbutton">XML Request</button>
           <button className="wspbutton">JSON Request</button>
           <button className="wspbutton">Execute Request</button>
          </div>
        );
      }




export default WebServices;