import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  Calendar,
  MessageSquare,
  Send,
  Inbox,
  History
} from 'lucide-react';

const incomingRequests = [
  {
    id: 1,
    user: {
      name: 'Emma Watson',
      avatar: '',
      initials: 'EW',
      rating: 4.7
    },
    skill: 'React Development',
    message: 'Hi! I would love to learn React from you. I can teach you graphic design in return.',
    wantsToTeach: 'Graphic Design',
    timestamp: '2 hours ago',
    status: 'pending'
  },
  {
    id: 2,
    user: {
      name: 'John Smith',
      avatar: '',
      initials: 'JS',
      rating: 4.9
    },
    skill: 'Web Development',
    message: 'I\'m interested in learning advanced web development techniques. I can offer digital marketing expertise.',
    wantsToTeach: 'Digital Marketing',
    timestamp: '5 hours ago',
    status: 'pending'
  },
  {
    id: 3,
    user: {
      name: 'Maria Garcia',
      avatar: '',
      initials: 'MG',
      rating: 4.8
    },
    skill: 'JavaScript',
    message: 'Looking to improve my JavaScript skills. I can teach you Spanish in exchange!',
    wantsToTeach: 'Spanish Language',
    timestamp: '1 day ago',
    status: 'pending'
  }
];

const sentRequests = [
  {
    id: 4,
    user: {
      name: 'Alex Rivera',
      avatar: '',
      initials: 'AR',
      rating: 5.0
    },
    skill: 'Spanish Language',
    message: 'I would love to learn Spanish from you. I can teach React development in return.',
    offering: 'React Development',
    timestamp: '3 hours ago',
    status: 'pending'
  },
  {
    id: 5,
    user: {
      name: 'Sarah Chen',
      avatar: '',
      initials: 'SC',
      rating: 4.9
    },
    skill: 'UI/UX Design',
    message: 'Interested in learning UI/UX design principles. I can offer web development skills.',
    offering: 'Web Development',
    timestamp: '1 day ago',
    status: 'accepted'
  },
  {
    id: 6,
    user: {
      name: 'Mike Johnson',
      avatar: '',
      initials: 'MJ',
      rating: 4.8
    },
    skill: 'Photography',
    message: 'Would love to learn photography techniques from you.',
    offering: 'Video Editing',
    timestamp: '2 days ago',
    status: 'rejected'
  }
];

const requestHistory = [
  {
    id: 7,
    user: {
      name: 'Lisa Zhang',
      avatar: '',
      initials: 'LZ',
      rating: 4.8
    },
    skill: 'Data Analysis',
    offering: 'Web Development',
    timestamp: '1 week ago',
    status: 'completed',
    sessions: 5,
    rating: 5
  },
  {
    id: 8,
    user: {
      name: 'David Kim',
      avatar: '',
      initials: 'DK',
      rating: 4.9
    },
    skill: 'Piano Playing',
    offering: 'React Development',
    timestamp: '2 weeks ago',
    status: 'completed',
    sessions: 3,
    rating: 4
  }
];

export function Requests() {
  const [activeTab, setActiveTab] = useState('incoming');

  const handleAcceptRequest = (requestId: number) => {
    console.log(`Accepting request ${requestId}`);
    // TODO: Implement accept logic
  };

  const handleRejectRequest = (requestId: number) => {
    console.log(`Rejecting request ${requestId}`);
    // TODO: Implement reject logic
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-orange-500';
      case 'accepted':
        return 'bg-green-500';
      case 'rejected':
        return 'bg-red-500';
      case 'completed':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'accepted':
        return <CheckCircle className="h-4 w-4" />;
      case 'rejected':
        return <XCircle className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Skill Requests</h1>
        <p className="text-muted-foreground mt-2">
          Manage your incoming and outgoing skill exchange requests
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="incoming" className="flex items-center space-x-2">
            <Inbox className="h-4 w-4" />
            <span>Incoming ({incomingRequests.length})</span>
          </TabsTrigger>
          <TabsTrigger value="sent" className="flex items-center space-x-2">
            <Send className="h-4 w-4" />
            <span>Sent ({sentRequests.length})</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center space-x-2">
            <History className="h-4 w-4" />
            <span>History ({requestHistory.length})</span>
          </TabsTrigger>
        </TabsList>

        {/* Incoming Requests */}
        <TabsContent value="incoming" className="space-y-6">
          {incomingRequests.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={request.user.avatar} />
                      <AvatarFallback>{request.user.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{request.user.name}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>Rating: {request.user.rating}</span>
                        <span>•</span>
                        <span>{request.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(request.status)}>
                    {getStatusIcon(request.status)}
                    <span className="ml-1 capitalize">{request.status}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-accent">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Wants to learn:</p>
                    <p className="font-semibold">{request.skill}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Offers to teach:</p>
                    <p className="font-semibold">{request.wantsToTeach}</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <p className="text-sm font-medium mb-2">Message:</p>
                  <p className="text-muted-foreground">{request.message}</p>
                </div>
                {request.status === 'pending' && (
                  <div className="flex space-x-3">
                    <Button onClick={() => handleAcceptRequest(request.id)} className="flex-1">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Accept
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleRejectRequest(request.id)}
                      className="flex-1"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Decline
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Sent Requests */}
        <TabsContent value="sent" className="space-y-6">
          {sentRequests.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={request.user.avatar} />
                      <AvatarFallback>{request.user.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{request.user.name}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>Rating: {request.user.rating}</span>
                        <span>•</span>
                        <span>{request.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(request.status)}>
                    {getStatusIcon(request.status)}
                    <span className="ml-1 capitalize">{request.status}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-accent">
                    <p className="text-sm font-medium text-muted-foreground mb-1">You want to learn:</p>
                    <p className="font-semibold">{request.skill}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent">
                    <p className="text-sm font-medium text-muted-foreground mb-1">You offered:</p>
                    <p className="font-semibold">{request.offering}</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <p className="text-sm font-medium mb-2">Your message:</p>
                  <p className="text-muted-foreground">{request.message}</p>
                </div>
                {request.status === 'accepted' && (
                  <Button className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Session
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Request History */}
        <TabsContent value="history" className="space-y-6">
          {requestHistory.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={request.user.avatar} />
                      <AvatarFallback>{request.user.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{request.user.name}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>Completed {request.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(request.status)}>
                    {getStatusIcon(request.status)}
                    <span className="ml-1 capitalize">{request.status}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 rounded-lg bg-accent">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Learned:</p>
                    <p className="font-semibold">{request.skill}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Taught:</p>
                    <p className="font-semibold">{request.offering}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Sessions:</p>
                    <p className="font-semibold">{request.sessions} completed</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Your rating:</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < request.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Leave Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}