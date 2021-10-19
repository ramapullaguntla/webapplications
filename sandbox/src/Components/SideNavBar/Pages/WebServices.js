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


    
    const rendereach = () =>
    {        
        
        return(            
            svc.map((eachContact) => 
            {
                return(
                 <>
                 <div>{eachContact.Name}</div>
                 <ul>
                     {eachContact.ServiceDetails.map((service) => {
                         return (<li>{service.Name}</li>);
                     } )}
                 </ul>
                 <div className="divider"></div>
                 </>
                );
            })
        );
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
         svc.map((eachproject) =>
         {
             console.log("Project Name " + eachproject.Name);
             return(
            <TreeItem key={eachproject.Name} nodeId={eachproject.Name} label={eachproject.Name} >
                {eachproject.ServiceDetails.map((service) => renderTreeServiceItem(service))}
            </TreeItem>);
         })
         );
        };

        const renderTreeServiceItem = (svcNode) =>
        {
            console.log("Service Name " + svcNode.Name);
            return(
                <TreeItem key={svcNode.Name} nodeId={svcNode.Name} label={svcNode.Name}  >
                    {svcNode.OperationDetails.map((op) => renderTreeOpItem(op))}
                </TreeItem>);
        };

        const renderTreeOpItem = (opItem) =>
        {
            console.log("Operation Name " + opItem.Name);
            return(
                <TreeItem key={opItem.Name} nodeId={opItem.Name} label={opItem.Name} sx={{ height:'25px'}}>                    
                </TreeItem>);
        };
      
        return (
          <div style={{display:'flex',  left:'200', margin:'60px',  flexDirection: 'row'  }}>
          <TreeView
            aria-label="rich object"
            defaultCollapseIcon={<FcIcons.FcCollapse />}           
            defaultExpandIcon={<FcIcons.FcExpand />} sx={{height: '100vh',width:'400px', overflowY: 'auto', backgroundColor:'#fff'}}>               
            {renderTree()}
          </TreeView>
           <textarea style={{ marginLeft: '20px', height: '400px', width: '600px'}}>Test</textarea>
           <button className="addbutton">XML Request</button>
           <button className="addbutton">JSON Request</button>
           <button className="addbutton">Execute Request</button>
          </div>
        );
      }




export default WebServices;