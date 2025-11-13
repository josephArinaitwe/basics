import apiClients from "./api-clients";
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
class UserService {
  getAllUsers(){
    const controller = new AbortController();
    
    const request = apiClients.get<User[]>('/users', {
    signal: controller.signal
    });
    return {request, cancel: () => controller.abort()}

  }  

    deleteUser(id: number){
    return  apiClients.delete('/users/' + id);
    }

    postUser(user: User){
    return apiClients.post('/users', user)
    }

    postUpdate(user: User){
    return apiClients.patch('/users/' + user.id, user)    
    }
}

export default new UserService();