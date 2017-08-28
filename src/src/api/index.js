
import fetch from '../config/fetch';

// Project List
export const mockProjectList = () => fetch ('/project/list', {});
// Project Add
export const mockProjectAdd = (data) => fetch ('/project/add', data, 'POST');
// Project Delete
export const mockProjectDelete = (id) => fetch ('/project/delete/'+id, {});

//Interface List
export const mockInterfaceList = (projectId) => fetch ('/interface/list/'+projectId, {});
//Interface Detail
export const mockInterfaceDetail = (id) => fetch ('/interface/detail/'+id, {});
// get Interface mock data
export const mockInterfaceMockData = (intf) => fetch (`/mock/${intf.project.name}/${intf.url}`, {});
//Interface Build Schema
export const mockInterfaceSchema = (id, schema) => fetch ('/interface/saveSchema', {id: id, schema: schema}, 'POST');
//Interface Update Template
export const mockInterfaceTemplate = (id, template) => fetch ('/interface/saveTemplate', {id: id, template: template}, 'GET');
//Interface Add
export const mockInterfaceAdd = (data) => fetch ('/interface/add', data, 'POST');
//Interface Delete
export const mockInterfaceDelete = (id) => fetch ('/interface/delete/'+id, {});
//Interface Copy
export const mockInterfaceCopy = (id) => fetch ('/interface/copy/'+id, {});
// Interface update URL
export const mockInterfaceURL = (id, url) => fetch ('/interface/url', {id: id, url: url});
