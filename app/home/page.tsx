
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal, Swords, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The Adventurers Guild: Code Your Adventure.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your digital guild hall where aspiring tech pioneers embark on real-world quests to forge their skills and conquer the digital frontier.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/waitlist"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Join the Waitlist
                  </Link>
                </div>
              </div>
              <Image
                src="/images/guild-logo.png"
                width="550"
                height="550"
                alt="Adventurers Guild Logo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Gamified Approach to Mastery</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Adventurers Guild is more than just a platform; it's an ecosystem designed for real-world skill development and career progression.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <Medal className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Gamified Progression</h3>
                </div>
                <p className="text-muted-foreground">
                  Earn Experience Points (XP) and climb the ranks from F to S. Higher ranks unlock more prestigious and rewarding quests.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <Swords className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Commissioned Quests</h3>
                </div>
                <p className="text-muted-foreground">
                  Take on real-world projects from companies and organizations. Build your portfolio with tangible, impactful work.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Community & Collaboration</h3>
                </div>
                <p className="text-muted-foreground">
                  Join a vibrant community of fellow adventurers. Collaborate on quests, share knowledge, and grow together.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="quests" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">The Quest Board</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the types of quests you can embark on.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Bug Bounty Brigades</CardTitle>
                  <CardDescription>Hunt down and squash bugs in existing codebases. A great way to learn and earn XP.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src="/public/images/quest-board.png" alt="Bug Bounty" width={400} height={225} className="rounded-md" />
                </CardContent>
                <CardFooter>
                  <Button>View Quests</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Digital Archaeology</CardTitle>
                  <CardDescription>Explore and document legacy codebases. Uncover hidden gems and learn from the past.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src="/images/quest-board.png" alt="Digital Archaeology" width={400} height={225} className="rounded-md" />
                </CardContent>
                <CardFooter>
                  <Button>View Quests</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Narrative-Driven Hackathons</CardTitle>
                  <CardDescription>Participate in themed hackathons with engaging storylines. Build innovative solutions and win prizes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image src="/images/quest-board.png" alt="Hackathon" width={400} height={225} className="rounded-md" />
                </CardContent>
                <CardFooter>
                  <Button>View Quests</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About the Guild</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Adventurers Guild was founded on the principle that the best way to learn is by doing. We believe that everyone should have the opportunity to gain practical, real-world experience, regardless of their background or level of expertise.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <Users className="h-10 w-10" />
                <p className="text-sm font-medium">1,000+ Adventurers</p>
              </div>
              <div className="flex flex-col items-center">
                <Target className="h-10 w-10" />
                <p className="text-sm font-medium">50+ Quests Completed</p>
              </div>
              <div className="flex flex-col items-center">
                <Medal className="h-10 w-10" />
                <p className="text-sm font-medium">S-Rank Adventurers</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2025 The Adventurers Guild. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
