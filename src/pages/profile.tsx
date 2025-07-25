import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { 
  Plus, 
  X, 
  Star, 
  BookOpen, 
  Award,
  User,
  Settings,
  MessageSquare
} from 'lucide-react';

export function Profile() {
  const { user } = useUser();
  const [teachingSkills, setTeachingSkills] = useState([
    'React Development',
    'JavaScript',
    'Web Development',
    'Node.js',
    'TypeScript'
  ]);
  const [learningSkills, setLearningSkills] = useState([
    'UI/UX Design',
    'Photography',
    'Digital Marketing'
  ]);
  const [newTeachingSkill, setNewTeachingSkill] = useState('');
  const [newLearningSkill, setNewLearningSkill] = useState('');
  const [bio, setBio] = useState(
    'Passionate full-stack developer with 5+ years of experience. Love teaching and sharing knowledge with fellow developers. Always eager to learn new technologies and improve my skills.'
  );

  const addTeachingSkill = () => {
    if (newTeachingSkill.trim() && !teachingSkills.includes(newTeachingSkill.trim())) {
      setTeachingSkills([...teachingSkills, newTeachingSkill.trim()]);
      setNewTeachingSkill('');
    }
  };

  const addLearningSkill = () => {
    if (newLearningSkill.trim() && !learningSkills.includes(newLearningSkill.trim())) {
      setLearningSkills([...learningSkills, newLearningSkill.trim()]);
      setNewLearningSkill('');
    }
  };

  const removeTeachingSkill = (skill: string) => {
    setTeachingSkills(teachingSkills.filter(s => s !== skill));
  };

  const removeLearningSkill = (skill: string) => {
    setLearningSkills(learningSkills.filter(s => s !== skill));
  };

  const reviews = [
    {
      id: 1,
      user: 'Sarah Johnson',
      rating: 5,
      comment: 'Excellent React teacher! Very patient and explains concepts clearly.',
      skill: 'React Development',
      date: '2 weeks ago'
    },
    {
      id: 2,
      user: 'Mike Chen',
      rating: 5,
      comment: 'Great mentor for web development. Helped me understand complex concepts.',
      skill: 'Web Development',
      date: '1 month ago'
    },
    {
      id: 3,
      user: 'Alex Rivera',
      rating: 4,
      comment: 'Good JavaScript instructor. Would recommend for beginners.',
      skill: 'JavaScript',
      date: '1 month ago'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground mt-2">
            Manage your skills and profile information
          </p>
        </div>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          Account Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Summary */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={user?.imageUrl} />
                <AvatarFallback className="text-2xl">
                  {user?.firstName?.[0]}{user?.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">
                {user?.firstName} {user?.lastName}
              </CardTitle>
              <CardDescription>
                {user?.emailAddresses[0]?.emailAddress}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Overall Rating</span>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-sm text-muted-foreground">(23 reviews)</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Sessions</span>
                <span className="font-semibold">47</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Member Since</span>
                <span className="font-semibold">Jan 2024</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">First Teacher</p>
                  <p className="text-sm text-muted-foreground">Completed your first teaching session</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Star className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">5-Star Teacher</p>
                  <p className="text-sm text-muted-foreground">Received 10+ five-star reviews</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <User className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Dedicated Learner</p>
                  <p className="text-sm text-muted-foreground">Completed 20+ learning sessions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="skills" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="skills" className="space-y-6">
              {/* Teaching Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills I Can Teach</CardTitle>
                  <CardDescription>
                    Add skills you're confident teaching to others
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {teachingSkills.map((skill) => (
                      <Badge key={skill} variant="default" className="px-3 py-1">
                        {skill}
                        <button
                          onClick={() => removeTeachingSkill(skill)}
                          className="ml-2 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add a teaching skill..."
                      value={newTeachingSkill}
                      onChange={(e) => setNewTeachingSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTeachingSkill()}
                    />
                    <Button onClick={addTeachingSkill}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Learning Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills I Want to Learn</CardTitle>
                  <CardDescription>
                    Add skills you're interested in learning from others
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {learningSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1">
                        {skill}
                        <button
                          onClick={() => removeLearningSkill(skill)}
                          className="ml-2 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add a learning goal..."
                      value={newLearningSkill}
                      onChange={(e) => setNewLearningSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addLearningSkill()}
                    />
                    <Button onClick={addLearningSkill}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bio */}
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                  <CardDescription>
                    Tell others about yourself and your teaching style
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    placeholder="Write a brief bio about yourself..."
                  />
                  <Button className="mt-4">Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reviews & Feedback</CardTitle>
                  <CardDescription>
                    See what others are saying about your teaching
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{review.user}</span>
                          <Badge variant="outline">{review.skill}</Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Manage your profile preferences and privacy settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="display-name">Display Name</Label>
                    <Input id="display-name" value={`${user?.firstName} ${user?.lastName}`} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={user?.emailAddresses[0]?.emailAddress} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location (Optional)</Label>
                    <Input id="location" placeholder="Your city, country" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input id="timezone" placeholder="Select your timezone" />
                  </div>
                  <Button>Save Settings</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>
                    Control how others can find and contact you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
                    </div>
                    <Button variant="outline">Public</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Direct Messages</p>
                      <p className="text-sm text-muted-foreground">Allow users to send you direct messages</p>
                    </div>
                    <Button variant="outline">Enabled</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive email notifications for new requests</p>
                    </div>
                    <Button variant="outline">Enabled</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}