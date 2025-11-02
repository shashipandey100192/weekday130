import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

function Appsidebar() {
  return (
    <Fragment>
      <div class="flex-shrink-0 p-3 mysidebar"> <a href="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">  <span class="fs-5 fw-semibold">Collapsible</span> </a> <ul class="list-unstyled ps-0"> <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
Home
</button> <div class="collapse" id="home-collapse">
   <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"> 
    <li><Link to="/dashboard" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Dashboard</Link></li>
     <li><Link to="userlist" class="link-body-emphasis d-inline-flex text-decoration-none rounded">UserList</Link></li>
      <li><Link to="api" class="link-body-emphasis d-inline-flex text-decoration-none rounded">ApiData</Link></li>
      <li><Link to="graph" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Graph</Link></li>
       </ul> </div> </li> <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
Dashboard
</button> <div class="collapse" id="dashboard-collapse"> <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li> </ul> </div> </li> <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
Orders
</button> <div class="collapse" id="orders-collapse"> <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li> </ul> </div> </li> <li class="border-top my-3"></li> <li class="mb-1"> <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
Account
</button> <div class="collapse" id="account-collapse"> <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small"> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li> <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li> </ul> </div> </li> </ul> </div>
    </Fragment>
  )
}

export default Appsidebar


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 70;

// export default function Appsidebar() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
      
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
      
//     </Box>
//   );
// }