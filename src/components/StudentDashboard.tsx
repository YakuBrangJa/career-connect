import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Search, 
  MapPin, 
  Clock, 
  Building2, 
  GraduationCap, 
  User, 
  FileText, 
  LogOut,
  BookOpen,
  Award,
  Calendar,
  TrendingUp
} from 'lucide-react';
import {user} from '../consts/data';

interface StudentDashboardProps {
  onLogout: () => void;
}


export function StudentDashboard({ onLogout }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState('search');

  const mockJobs = [
    {
      id: '1',
      title: 'Software Engineering Intern',
      company: 'TechCorp Industries',
      location: 'San Francisco, CA',
      type: 'Internship',
      duration: '3 months',
      posted: '2 days ago',
      skills: ['React', 'JavaScript', 'Python'],
      description: 'Join our dynamic team to build cutting-edge web applications...'
    },
    {
      id: '2',
      title: 'Data Science Training Program',
      company: 'DataFlow Solutions',
      location: 'Remote',
      type: 'Training',
      duration: '6 weeks',
      posted: '1 week ago',
      skills: ['Python', 'Machine Learning', 'SQL'],
      description: 'Comprehensive training program in data science and analytics...'
    },
    {
      id: '3',
      title: 'Marketing Associate',
      company: 'BrandBoost Agency',
      location: 'New York, NY',
      type: 'Job',
      duration: 'Full-time',
      posted: '3 days ago',
      skills: ['Digital Marketing', 'Analytics', 'Content Creation'],
      description: 'Drive marketing campaigns for leading consumer brands...'
    }
  ];

  const mockApplications = [
    {
      id: '1',
      title: 'Frontend Developer Intern',
      company: 'StartupXYZ',
      status: 'Interview Scheduled',
      appliedDate: '2024-01-15',
      nextStep: 'Technical Interview on Jan 20'
    },
    {
      id: '2',
      title: 'UX Design Intern',
      company: 'DesignCorp',
      status: 'Under Review',
      appliedDate: '2024-01-10',
      nextStep: 'Awaiting response'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <GraduationCap className="size-8 text-primary" />
              <h1 className="text-xl font-semibold">CampusCareer</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar className="size-8">
                  <AvatarImage src="" />
                  <AvatarFallback>
                    {user.name.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline">{user.name}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <LogOut className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container max-w-[1000px] mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="search">Career</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs, internships, training programs..."
                  className="pl-10"
                />
              </div>
              <Button>Search</Button>
            </div>

            <div className="grid gap-6">
              {mockJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {job.title}
                          <Badge variant={job.type === 'Internship' ? 'default' : job.type === 'Training' ? 'secondary' : 'outline'}>
                            {job.type}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-1">
                            <Building2 className="size-4" />
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="size-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="size-4" />
                            {job.duration}
                          </span>
                        </CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">{job.posted}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button>Apply Now</Button>
                      <Button variant="outline">Save</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <div>
              <h2 className="text-2xl mb-4">My Applications</h2>
              <div className="grid gap-4">
                {mockApplications.map((app) => (
                  <Card key={app.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{app.title}</CardTitle>
                          <CardDescription>{app.company}</CardDescription>
                        </div>
                        <Badge 
                          variant={app.status === 'Interview Scheduled' ? 'default' : 'secondary'}
                        >
                          {app.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Applied: {app.appliedDate}</span>
                        <span>{app.nextStep}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="size-5" />
                      Basic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <Input value={user.name} />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <Input value={user.email} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">University</label>
                        <Input value={user.university} />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Academic Year</label>
                        <Input value={user.year} />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Major</label>
                      <Input value={user.major} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="size-5" />
                      Skills & Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'React', 'Python', 'Git', 'SQL', 'Node.js'].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="mt-4">Add More Skills</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="size-5" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="size-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Award className="size-4 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium">Dean's List</p>
                          <p className="text-sm text-muted-foreground">Fall 2023</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="size-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Award className="size-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Hackathon Winner</p>
                          <p className="text-sm text-muted-foreground">TechFest 2023</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4">Add Achievement</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="size-5" />
                      Profile Strength
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Profile Completion</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} />
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-green-600">
                          <div className="size-2 bg-green-600 rounded-full"></div>
                          University verified
                        </div>
                        <div className="flex items-center gap-2 text-green-600">
                          <div className="size-2 bg-green-600 rounded-full"></div>
                          Basic info complete
                        </div>
                        <div className="flex items-center gap-2 text-yellow-600">
                          <div className="size-2 bg-yellow-600 rounded-full"></div>
                          Add portfolio projects
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 size-4" />
                      Upload Resume
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Award className="mr-2 size-4" />
                      Add Project
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <User className="mr-2 size-4" />
                      Update Photo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div>
              <h2 className="text-2xl mb-4">Upcoming Events</h2>
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="size-5" />
                      Tech Career Fair 2024
                    </CardTitle>
                    <CardDescription>University Campus • March 15, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Meet with top tech companies including Google, Microsoft, and Amazon.
                    </p>
                    <Button>Register</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="size-5" />
                      Resume Workshop
                    </CardTitle>
                    <CardDescription>Virtual Event • March 10, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn how to craft a compelling resume that gets noticed by recruiters.
                    </p>
                    <Button>Join Event</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}