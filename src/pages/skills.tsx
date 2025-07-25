import { useState } from 'react';
import { Card, CardContent, CardHeader} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Star, 
  MessageSquare, 
  Users,
  BookOpen,
  Code,
  Palette,
  Camera,
  Globe,
  Music,
  Heart
} from 'lucide-react';

const skillCategories = [
  { id: 'all', name: 'All Categories', icon: BookOpen },
  { id: 'technology', name: 'Technology', icon: Code },
  { id: 'creative', name: 'Creative', icon: Palette },
  { id: 'photography', name: 'Photography', icon: Camera },
  { id: 'language', name: 'Languages', icon: Globe },
  { id: 'music', name: 'Music', icon: Music },
];

const availableSkills = [
  {
    id: 1,
    user: {
      name: 'Sarah Chen',
      avatar: '',
      initials: 'SC',
      rating: 4.9,
      sessions: 23
    },
    skill: 'React Development',
    description: 'Frontend development with React, Redux, and modern JavaScript. Perfect for beginners to intermediate learners.',
    category: 'technology',
    wantsToLearn: 'UI/UX Design',
    matchPercentage: 95,
    tags: ['React', 'JavaScript', 'Redux', 'Frontend']
  },
  {
    id: 2,
    user: {
      name: 'Mike Johnson',
      avatar: '',
      initials: 'MJ',
      rating: 4.8,
      sessions: 31
    },
    skill: 'Photography',
    description: 'Portrait and landscape photography techniques, lighting, and post-processing with Adobe Lightroom.',
    category: 'photography',
    wantsToLearn: 'Video Editing',
    matchPercentage: 88,
    tags: ['Portrait', 'Landscape', 'Lightroom', 'Composition']
  },
  {
    id: 3,
    user: {
      name: 'Alex Rivera',
      avatar: '',
      initials: 'AR',
      rating: 5.0,
      sessions: 45
    },
    skill: 'Spanish Language',
    description: 'Native Spanish speaker offering conversational practice and grammar lessons for all levels.',
    category: 'language',
    wantsToLearn: 'Guitar Playing',
    matchPercentage: 92,
    tags: ['Conversational', 'Grammar', 'Native Speaker', 'All Levels']
  },
  {
    id: 4,
    user: {
      name: 'Emma Watson',
      avatar: '',
      initials: 'EW',
      rating: 4.7,
      sessions: 18
    },
    skill: 'Graphic Design',
    description: 'Logo design, branding, and digital illustration using Adobe Creative Suite and Figma.',
    category: 'creative',
    wantsToLearn: 'Web Development',
    matchPercentage: 85,
    tags: ['Logo Design', 'Branding', 'Adobe CC', 'Figma']
  },
  {
    id: 5,
    user: {
      name: 'David Kim',
      avatar: '',
      initials: 'DK',
      rating: 4.9,
      sessions: 27
    },
    skill: 'Piano Playing',
    description: 'Classical and contemporary piano lessons for beginners. Music theory and sheet reading included.',
    category: 'music',
    wantsToLearn: 'Digital Marketing',
    matchPercentage: 78,
    tags: ['Classical', 'Contemporary', 'Music Theory', 'Beginner Friendly']
  },
  {
    id: 6,
    user: {
      name: 'Lisa Zhang',
      avatar: '',
      initials: 'LZ',
      rating: 4.8,
      sessions: 35
    },
    skill: 'Data Analysis',
    description: 'Python, pandas, and data visualization techniques. Perfect for aspiring data scientists.',
    category: 'technology',
    wantsToLearn: 'Machine Learning',
    matchPercentage: 91,
    tags: ['Python', 'Pandas', 'Data Viz', 'Statistics']
  }
];

export function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('match');

  const filteredSkills = availableSkills
    .filter(skill => {
      const matchesSearch = skill.skill.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'match':
          return b.matchPercentage - a.matchPercentage;
        case 'rating':
          return b.user.rating - a.user.rating;
        case 'sessions':
          return b.user.sessions - a.user.sessions;
        default:
          return 0;
      }
    });

  const handleSendRequest = (skillId: number) => {
    // TODO: Implement request sending logic
    console.log(`Sending request for skill ${skillId}`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Discover Skills</h1>
        <p className="text-muted-foreground mt-2">
          Find amazing people to learn from and share your skills with
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search skills, tags, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {skillCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <SelectItem key={category.id} value={category.id}>
                      <div className="flex items-center space-x-2">
                        <Icon className="h-4 w-4" />
                        <span>{category.name}</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">Best Match</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="sessions">Most Sessions</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <Card key={skill.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge 
                  variant={skill.matchPercentage >= 90 ? "default" : "secondary"}
                  className={skill.matchPercentage >= 90 ? "bg-green-600" : ""}
                >
                  {skill.matchPercentage}% match
                </Badge>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{skill.user.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={skill.user.avatar} />
                  <AvatarFallback>{skill.user.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{skill.user.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{skill.user.sessions} sessions</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">{skill.skill}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {skill.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <Heart className="h-4 w-4 text-pink-500" />
                <span className="text-muted-foreground">Wants to learn:</span>
                <span className="font-medium">{skill.wantsToLearn}</span>
              </div>
              
              <Button 
                onClick={() => handleSendRequest(skill.id)}
                className="w-full"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Request
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-lg font-semibold mb-2">No skills found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find more skills
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}