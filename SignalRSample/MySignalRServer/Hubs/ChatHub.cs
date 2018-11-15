using Microsoft.AspNetCore.SignalR;

namespace MySignalRServer.Hubs
{
    public class ChatHub : Hub
    {
        public void MyMessage(string user, string message)
        {
            Clients.All.SendAsync("MyBroadcast", user, message);
        }
    }
}
