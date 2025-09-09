import {Button, buttonVariants} from './ui/button';
import {Card, CardDescription, CardHeader, CardTitle} from './ui/card';
import {GraduationCap, Building2, Search, Users, TrendingUp, Shield} from 'lucide-react';
import {Link} from 'react-router-dom';
import CheckboxForm from '@/components/hook-form';


export function LandingPage () {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="size-8 text-primary" />
              <h1 className=" text-xl font-semibold">CampusCareer</h1>
            </div>
            <div className="space-x-4">
              <Link
                to="/student/auth"
                className={buttonVariants({variant: 'ghost'})}
              >
                Student Login
              </Link>
              <Link
                to="/recruiter/auth"
                className={buttonVariants({variant: 'ghost'})}
              >
                Recruiter Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl mb-6">
            Connect Students with <span className="text-blue-600">Dream Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The premier platform connecting university students with internships, jobs, training programs, and networking events from top companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/student/auth"
              className={buttonVariants({size: 'lg', className: "!text-lg px-8 py-6"})}
            >
              <GraduationCap className="mr-2 size-5" />
              I'm a Student
            </Link>
            <Link
              to="/recruiter/auth"
              className={buttonVariants({size: 'lg', variant:"outline", className: "!text-lg px-8 py-6"})}
            >
              <Building2 className="mr-2 size-5" />
              I'm a Recruiter
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl text-center mb-12">Why Choose CampusCareer?</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="size-12 text-blue-600 mb-4" />
                <CardTitle>University Verified</CardTitle>
                <CardDescription>
                  All students are verified through official university APIs ensuring authentic academic credentials.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Search className="size-12 text-green-600 mb-4" />
                <CardTitle>Smart Matching</CardTitle>
                <CardDescription>
                  Advanced algorithms match students with opportunities based on skills, academic background, and career goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="size-12 text-purple-600 mb-4" />
                <CardTitle>Comprehensive Tracking</CardTitle>
                <CardDescription>
                  Full applicant tracking system for recruiters and application management for students.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl mb-6">For Students</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="size-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">University Verification</h4>
                    <p className="text-muted-foreground">Quick signup with official university API verification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="size-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Rich Profile Builder</h4>
                    <p className="text-muted-foreground">Showcase academic history, skills, projects, and achievements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="size-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Smart Search</h4>
                    <p className="text-muted-foreground">Find jobs, internships, training programs, and events tailored to you</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6">
                Get Started as Student
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                <div className="mt-6 p-4 bg-blue-50 rounded">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="size-5 text-blue-600" />
                    <span className="text-sm">Profile Strength: 85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <span className="font-medium">Software Engineering Intern</span>
                  <span className="text-sm text-green-600">45 applications</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <span className="font-medium">Marketing Associate</span>
                  <span className="text-sm text-blue-600">23 applications</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <span className="font-medium">Data Science Training</span>
                  <span className="text-sm text-purple-600">67 interested</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl mb-6">For Recruiters</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="size-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Company Page Setup</h4>
                    <p className="text-muted-foreground">Create compelling company profiles to attract top talent</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="size-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Multi-Format Posting</h4>
                    <p className="text-muted-foreground">Post jobs, internships, training programs, and events</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="size-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Talent Discovery</h4>
                    <p className="text-muted-foreground">Advanced search and applicant tracking system</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6">
                Get Started as Recruiter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="size-8" />
            <h3 className="text-xl font-semibold">CampusCareer</h3>
          </div>
          <p className="text-gray-400 mb-8">Connecting students with their future careers</p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="text-gray-400 hover:text-white">About</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">Contact</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">Privacy</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">Terms</Button>
          </div>
        </div>
      </footer>
      <CheckboxForm />
    </div>
  );
}