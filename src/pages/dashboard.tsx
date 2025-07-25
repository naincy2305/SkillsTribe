import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  TrendingUp,
  Calendar,
  Users,
  Star,
  MessageSquare
} from 'lucide-react';

const recentActivity = [
  {
    id: 1,
    type: 'request_received',
    user: 'Emma Watson',
    skill: 'React Development',
    time: '2 hours ago',
    status: 'pending'
  },
  {
    id: 2,
    type: 'request_accepted',
    user: 'John Doe',
    skill: 'UI/UX Design',
    time: '1 day ago',
    status: 'accepted'
  },
  {
    id: 3,
    type: 'session_completed',
    user: 'Sarah Johnson',
    skill: 'Photography',
    time: '2 days ago',
    status: 'completed'
  }
];

const upcomingSessions = [
  {
    id: 1,
    user: 'Alex Rivera',
    skill: 'Spanish Language',
    date: 'Today, 3:00 PM',
    type: 'learning'
  },
  {
    id: 2,
    user: 'Mike Chen',
    skill: 'Web Development',
    date: 'Tomorrow, 10:00 AM',
    type: 'teaching'
  }
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Track your skill exchanges and manage your learning journey
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills Teaching</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills Learning</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">12 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.9</div>
            <p className="text-xs text-muted-foreground">Based on 15 reviews</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest skill exchange activities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent transition-colors">
                <div className="flex-shrink-0">
                  {activity.status === 'pending' && <Clock className="h-5 w-5 text-orange-500" />}
                  {activity.status === 'accepted' && <CheckCircle className="h-5 w-5 text-green-500" />}
                  {activity.status === 'completed' && <Star className="h-5 w-5 text-blue-500" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium">
                    {activity.type === 'request_received' && `${activity.user} wants to learn ${activity.skill}`}
                    {activity.type === 'request_accepted' && `${activity.user} accepted your ${activity.skill} request`}
                    {activity.type === 'session_completed' && `Completed ${activity.skill} session with ${activity.user}`}
                  </p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <Badge 
                  variant={
                    activity.status === 'pending' ? 'secondary' :
                    activity.status === 'accepted' ? 'default' : 'outline'
                  }
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
            <CardDescription>
              Your scheduled skill exchange sessions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>
                      {session.user.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{session.user}</p>
                    <p className="text-sm text-muted-foreground">{session.skill}</p>
                    <p className="text-sm text-muted-foreground">{session.date}</p>
                  </div>
                </div>
                <Badge 
                  variant={session.type === 'teaching' ? 'default' : 'secondary'}
                >
                  {session.type}
                </Badge>
              </div>
            ))}
            
            {upcomingSessions.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No upcoming sessions</p>
                <p className="text-sm">Schedule your next skill exchange!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Learning Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Progress</CardTitle>
          <CardDescription>
            Track your progress in skills you're currently learning
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">React Development</span>
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-sm text-muted-foreground">5 sessions completed with John Doe</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Digital Photography</span>
              <span className="text-sm text-muted-foreground">45%</span>
            </div>
            <Progress value={45} className="h-2" />
            <p className="text-sm text-muted-foreground">3 sessions completed with Sarah Johnson</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Spanish Language</span>
              <span className="text-sm text-muted-foreground">30%</span>
            </div>
            <Progress value={30} className="h-2" />
            <p className="text-sm text-muted-foreground">2 sessions completed with Alex Rivera</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}