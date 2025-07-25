import { useUser } from '@clerk/clerk-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Star,
  ArrowRight,
  Sparkles,
  BookOpen,
  Heart
} from 'lucide-react';

const featuredSkills = [
  { name: 'Web Development', count: 45, category: 'Technology' },
  { name: 'Graphic Design', count: 32, category: 'Creative' },
  { name: 'Data Analysis', count: 28, category: 'Analytics' },
  { name: 'Digital Marketing', count: 35, category: 'Business' },
  { name: 'Photography', count: 41, category: 'Creative' },
  { name: 'Language Learning', count: 67, category: 'Education' },
];

const recentMatches = [
  {
    id: 1,
    user: { name: 'Sarah Chen', avatar: '', initials: 'SC' },
    skill: 'React Development',
    wants: 'UI/UX Design',
    match: 95,
  },
  {
    id: 2,
    user: { name: 'Mike Johnson', avatar: '', initials: 'MJ' },
    skill: 'Photography',
    wants: 'Video Editing',
    match: 88,
  },
  {
    id: 3,
    user: { name: 'Alex Rivera', avatar: '', initials: 'AR' },
    skill: 'Spanish Language',
    wants: 'Guitar Playing',
    match: 92,
  },
];

export function Home() {
  const { user } = useUser();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Welcome to SkillSathi
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect, Learn, and Grow together through peer-to-peer skill exchange.
          Share what you know, learn what you need - all for free!
        </p>
        <div className="flex items-center justify-center space-x-4 mt-6">
          <Button asChild size="lg" className="group">
            <Link to="/skills">
              Explore Skills
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/profile">
              Update Profile
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">2,847</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-teal-500/20 hover:border-teal-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills Available</CardTitle>
            <BookOpen className="h-4 w-4 text-teal-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-teal-600">1,245</div>
            <p className="text-xs text-muted-foreground">Across 50+ categories</p>
          </CardContent>
        </Card>

        <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Successful Matches</CardTitle>
            <Heart className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">4,321</div>
            <p className="text-xs text-muted-foreground">This month: 234</p>
          </CardContent>
        </Card>

        <Card className="border-green-500/20 hover:border-green-500/40 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">4.8</div>
            <p className="text-xs text-muted-foreground">Based on 1,200+ reviews</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Trending Skills</span>
            </CardTitle>
            <CardDescription>
              Most popular skills people are learning and teaching
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {featuredSkills.map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                  </div>
                </div>
                <Badge variant="secondary">
                  {skill.count} users
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Matches */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-teal-600" />
              <span>Recent Matches</span>
            </CardTitle>
            <CardDescription>
              Great skill exchange opportunities waiting for you
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMatches.map((match) => (
              <div key={match.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent transition-colors">
                <Avatar>
                  <AvatarImage src={match.user.avatar} />
                  <AvatarFallback>{match.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{match.user.name}</p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>Teaches: {match.skill}</span>
                    <span>•</span>
                    <span>Wants: {match.wants}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={match.match >= 90 ? "default" : "secondary"}
                    className={match.match >= 90 ? "bg-green-600" : ""}
                  >
                    {match.match}% match
                  </Badge>
                </div>
              </div>
            ))}
            <Button asChild variant="outline" className="w-full">
              <Link to="/skills">
                View All Matches
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}