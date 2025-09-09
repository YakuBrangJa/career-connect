import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { ArrowLeft, GraduationCap, CheckCircle } from 'lucide-react';

interface StudentAuthProps {
  onAuthSuccess: (userData: any) => void;
  onBack: () => void;
}

export function StudentAuth({ onAuthSuccess, onBack }: StudentAuthProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [verificationStep, setVerificationStep] = useState<'form' | 'verifying' | 'verified'>('form');
  const [activeTab, setActiveTab] = useState('signup');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setVerificationStep('verifying');
    
    // Simulate university API verification
    setTimeout(() => {
      setVerificationStep('verified');
      setTimeout(() => {
        onAuthSuccess({
          id: '1',
          name: 'Alex Johnson',
          email: 'alex.johnson@university.edu',
          university: 'Tech University',
          year: 'Junior',
          major: 'Computer Science',
          verified: true
        });
      }, 1500);
    }, 2000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      onAuthSuccess({
        id: '1',
        name: 'Alex Johnson',
        email: 'alex.johnson@university.edu',
        university: 'Tech University',
        year: 'Junior',
        major: 'Computer Science',
        verified: true
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="mr-2 size-4" />
          Back to Home
        </Button>

        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <GraduationCap className="size-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl mb-2">Student Portal</h1>
            <p className="text-muted-foreground">Join thousands of students finding their dream opportunities</p>
          </div>

          {verificationStep === 'verifying' && (
            <Card>
              <CardHeader className="text-center">
                <div className="animate-spin size-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <CardTitle>Verifying with University</CardTitle>
                <CardDescription>
                  We're verifying your credentials with your university's API...
                </CardDescription>
              </CardHeader>
            </Card>
          )}

          {verificationStep === 'verified' && (
            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="size-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Verification Successful!</CardTitle>
                <CardDescription>
                  Your university credentials have been verified. Setting up your account...
                </CardDescription>
              </CardHeader>
            </Card>
          )}

          {verificationStep === 'form' && (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="login">Login</TabsTrigger>
              </TabsList>

              <TabsContent value="signup">
                <Card>
                  <CardHeader>
                    <CardTitle>Create Student Account</CardTitle>
                    <CardDescription>
                      Sign up with your university email for instant verification
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">University Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="yourname@university.edu"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="university">University</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your university" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tech-university">Tech University</SelectItem>
                            <SelectItem value="state-university">State University</SelectItem>
                            <SelectItem value="metro-college">Metro College</SelectItem>
                            <SelectItem value="city-university">City University</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="year">Academic Year</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="freshman">Freshman</SelectItem>
                              <SelectItem value="sophomore">Sophomore</SelectItem>
                              <SelectItem value="junior">Junior</SelectItem>
                              <SelectItem value="senior">Senior</SelectItem>
                              <SelectItem value="graduate">Graduate</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="major">Major</Label>
                          <Input id="major" placeholder="Computer Science" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                      </div>

                      <Alert>
                        <AlertDescription>
                          Your account will be verified through your university's official API upon registration.
                        </AlertDescription>
                      </Alert>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Create Account & Verify'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Welcome Back</CardTitle>
                    <CardDescription>
                      Login to your student account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="loginEmail">Email</Label>
                        <Input
                          id="loginEmail"
                          type="email"
                          placeholder="yourname@university.edu"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="loginPassword">Password</Label>
                        <Input id="loginPassword" type="password" required />
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                      </Button>

                      <div className="text-center">
                        <Button variant="link" className="text-sm">
                          Forgot your password?
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
}