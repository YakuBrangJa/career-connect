import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  MapPin, 
  Clock, 
  Building2, 
  Plus, 
  Users, 
  FileText, 
  LogOut,
  Eye,
  MessageSquare,
  Calendar,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import {user} from '../consts/data';

interface RecruiterDashboardProps {
  onLogout: () => void;
}

export function RecruiterDashboard({ onLogout }: RecruiterDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const mockJobPostings = [
    {
      id: '1',
      title: 'Software Engineering Intern',
      type: 'Internship',
      location: 'San Francisco, CA',
      posted: '3 days ago',
      applications: 45,
      status: 'Active'
    },
    {
      id: '2',
      title: 'Marketing Associate',
      type: 'Job',
      location: 'Remote',
      posted: '1 week ago',
      applications: 23,
      status: 'Active'
    }
  ];

  const mockCandidates = [
    {
      id: '1',
      name: 'Alex Johnson',
      university: 'Tech University',
      major: 'Computer Science',
      year: 'Junior',
      gpa: '3.8',
      skills: ['React', 'Python', 'JavaScript'],
      appliedFor: 'Software Engineering Intern'
    },
    {
      id: '2',
      name: 'Sarah Chen',
      university: 'State University',
      major: 'Marketing',
      year: 'Senior',
      gpa: '3.9',
      skills: ['Digital Marketing', 'Analytics', 'Content Creation'],
      appliedFor: 'Marketing Associate'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Building2 className="size-8 text-primary" />
              <div>
                <h1 className="text-xl font-semibold">CampusCareer</h1>
                <p className="text-sm text-muted-foreground">{user.company}</p>
              </div>
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

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="post-job">Post Job</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                  <FileText className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                  <Users className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">234</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
                  <Calendar className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                  <TrendingUp className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Job Postings */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Job Postings</CardTitle>
                  <Button size="sm">
                    <Plus className="mr-2 size-4" />
                    Post New Job
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockJobPostings.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="size-3" />
                            {job.location}
                          </span>
                          <span>{job.posted}</span>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">{job.applications} applications</p>
                          <p className="text-sm text-muted-foreground">{job.status}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 size-4" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="post-job" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Job Posting</CardTitle>
                <CardDescription>Post jobs, internships, training programs, or events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Title</label>
                    <Input placeholder="Software Engineering Intern" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="job">Full-time Job</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="training">Training Program</SelectItem>
                        <SelectItem value="event">Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Location</label>
                    <Input placeholder="San Francisco, CA or Remote" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Duration</label>
                    <Input placeholder="3 months, Full-time, etc." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea 
                    placeholder="Describe the role, responsibilities, and requirements..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Required Skills</label>
                  <Input placeholder="React, Python, JavaScript (comma separated)" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Minimum GPA</label>
                    <Input placeholder="3.0" type="number" step="0.1" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Academic Year</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Year</SelectItem>
                        <SelectItem value="freshman">Freshman</SelectItem>
                        <SelectItem value="sophomore">Sophomore</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>Publish Job</Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl">Candidate Management</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
                  <Input placeholder="Search candidates..." className="pl-10 w-64" />
                </div>
                <Button variant="outline">Filters</Button>
              </div>
            </div>

            <div className="grid gap-4">
              {mockCandidates.map((candidate) => (
                <Card key={candidate.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <Avatar className="size-12">
                          <AvatarFallback>
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{candidate.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <GraduationCap className="size-4" />
                            {candidate.university} • {candidate.major} • {candidate.year}
                          </div>
                          <p className="text-sm">GPA: {candidate.gpa}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{candidate.appliedFor}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-2 size-4" />
                          Message
                        </Button>
                        <Button size="sm">
                          Schedule Interview
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="company" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Profile</CardTitle>
                <CardDescription>Manage your company information and branding</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name</label>
                    <Input value={user.company} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Industry</label>
                    <Input value={user.industry} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Size</label>
                    <Input value={user.companySize} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Website</label>
                    <Input placeholder="https://company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Description</label>
                  <Textarea 
                    placeholder="Tell students about your company, culture, and opportunities..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Location</label>
                  <Input placeholder="San Francisco, CA" />
                </div>

                <Button>Update Company Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>This Month</span>
                      <span className="font-bold">89 applications</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Last Month</span>
                      <span className="font-bold">67 applications</span>
                    </div>
                    <div className="flex justify-between items-center text-green-600">
                      <span>Growth</span>
                      <span className="font-bold">+33%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Universities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Tech University</span>
                      <span className="font-medium">34%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>State University</span>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Metro College</span>
                      <span className="font-medium">21%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Others</span>
                      <span className="font-medium">17%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}