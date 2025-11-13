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

  deleteUser(user: User){
    const controller = new AbortController();
    const request = apiClients.delete('/users/' + user.id, {
        signal: controller.signal
  });
    return {request, cancel: () => controller.abort()}
    }

    postUser(newUser: User){
      const controller = new AbortController();
      const request = apiClients.post('/users', newUser, {
        signal: controller.signal
      });
      return {request, cancel: () => controller.abort()}
    
    }
    }

export default new UserService();