"use client"

import { useState, useEffect } from "react"
import { 
  Shield, 
  Lock, 
  Database, 
  Share2, 
  Clock, 
  FileText, 
  Search,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  UserCheck,
  CreditCard,
  Instagram
} from "lucide-react"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")

  const sections = [
    { id: "overview", label: "Overview", icon: Shield },
    { id: "collection", label: "Information We Collect", icon: Database },
    { id: "usage", label: "How We Use Data", icon: UserCheck },
    { id: "sharing", label: "Data Sharing", icon: Share2 },
    { id: "retention", label: "Data Retention", icon: Clock },
    { id: "rights", label: "Your Rights", icon: Lock },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const offset = 200
      
      sections.forEach(section => {
        const element = document.getElementById(section.id)
        if (element) {
          const top = element.offsetTop - offset
          const bottom = top + element.offsetHeight
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id)
          }
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      })
      setActiveSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-zinc-950">
      {/* Dynamic Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">ynify</span>
            <Badge variant="outline" className="ml-2 hidden sm:flex">Legal Center</Badge>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative hidden md:flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search policy..."
                className="w-[200px] lg:w-[300px] pl-8 bg-muted/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="text-sm font-medium hover:text-primary transition-colors">Contact Support</button>
          </div>
        </div>
      </header>

      <main className="container grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 py-12 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden md:block sticky top-28 self-start h-[calc(100vh-120px)]">
          <nav className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-3">Sections</p>
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-muted ${
                    activeSection === section.id ? "bg-muted text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                  {activeSection === section.id && <ChevronRight className="ml-auto h-4 w-4" />}
                </button>
              )
            })}
          </nav>
          
          <div className="mt-12 p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Quick Summary
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We use your data to power AI replies and we <strong>never</strong> sell your information to third parties.
            </p>
          </div>
        </aside>

        {/* Content Area */}
        <div className="space-y-20 max-w-3xl">
          {/* Hero Section */}
          <section id="overview" className="scroll-mt-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              <FileText className="h-3 w-3" />
              Updated April 2026
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Ynify, we're committed to radical transparency. We built this platform to handle your social media metadata with the same care we'd want for our own.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <Card className="bg-muted/30 border-none shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Data Ownership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">You own 100% of your data. We only process it to provide the service.</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 border-none shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">AI Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">We do not train public LLMs on your private customer conversations.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Information We Collect */}
          <section id="collection" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                <Database className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="social">Social Media</TabsTrigger>
                <TabsTrigger value="payment">Payments</TabsTrigger>
                <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UserCheck className="h-5 w-5 text-primary" />
                      User Identity
                    </CardTitle>
                    <CardDescription>Primary information used to manage your Ynify account.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span><strong>Full Name & Email:</strong> To identify your account and send service notifications.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span><strong>Timezone:</strong> To accurately schedule your automated social posts.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="social">
                 <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      Platform Data
                    </CardTitle>
                    <CardDescription>Data sync via Meta Graph API.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <p>We access Instagram account data including profile info, posts, and engagement metrics to power your analytics dashboard.</p>
                    <div className="p-3 bg-red-50 text-red-700 rounded-lg dark:bg-red-900/10 dark:text-red-400">
                       Note: We only access data you explicitly grant via the official OAuth handshake.
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="payment">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-green-500" />
                      Secure Billing
                    </CardTitle>
                    <CardDescription>Transactions managed by global payment leaders.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <p>To ensure maximum security, we use tiered payment processing:</p>
                    <div className="grid gap-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="h-8 w-8 rounded bg-white flex items-center justify-center font-bold text-[10px] text-blue-600 border shrink-0">STRIPE</div>
                        <div>
                          <p className="font-semibold text-xs">Stripe, Inc.</p>
                          <p className="text-[10px] text-muted-foreground">Used for international subscriptions and global card processing.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="h-8 w-8 rounded bg-white flex items-center justify-center font-bold text-[10px] text-teal-500 border shrink-0">PAYSTACK</div>
                        <div>
                          <p className="font-semibold text-xs">Paystack (by Stripe)</p>
                          <p className="text-[10px] text-muted-foreground">Primary processor for Nigerian and African merchant transactions.</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs italic text-muted-foreground mt-2">
                      We never store raw card numbers. Both providers use tokenization to keep your financial data siloed and safe.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="infrastructure">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sm">Backend & Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-muted-foreground">
                    Our infrastructure is hosted on Vercel with database management via Neon. Analytics are anonymized and used strictly for platform health monitoring.
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* How We Use Your Information */}
          <section id="usage" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                <UserCheck className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            </div>
            
            <div className="grid gap-6">
              {[
                { title: "AI Automation", desc: "Providing AI-powered auto-reply services for your social accounts.", icon: CheckCircle2 },
                { title: "Scheduling", desc: "Enabling content calendar management and automated publishing.", icon: CheckCircle2 },
                { title: "Improvements", desc: "Analyzing usage patterns to build better features and fix bugs.", icon: CheckCircle2 },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border bg-card hover:bg-muted/50 transition-colors">
                  <item.icon className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Sharing */}
          <section id="sharing" className="scroll-mt-28">
             <div className="p-8 rounded-3xl bg-slate-900 text-white dark:bg-zinc-900 border border-white/10">
                <div className="flex items-center gap-3 mb-6 font-bold text-2xl">
                  <Share2 className="h-6 w-6 text-primary" />
                  No Data Selling
                </div>
                <p className="text-slate-300 mb-8 max-w-md">
                  We believe your privacy is not a commodity. We shared your data only with these essential partners to keep the lights on:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <Instagram className="h-8 w-8 text-pink-500" />
                    <div>
                      <div className="font-bold">Meta Graph</div>
                      <div className="text-xs text-slate-400">Core Content Engine</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <CreditCard className="h-8 w-8 text-blue-500" />
                    <div>
                      <div className="font-bold">Stripe</div>
                      <div className="text-xs text-slate-400">Global Payments</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-teal-500" />
                    </div>
                    <div>
                      <div className="font-bold">Paystack</div>
                      <div className="text-xs text-slate-400">Regional Merchant</div>
                    </div>
                  </div>
                </div>
             </div>
          </section>

          {/* Data Retention */}
          <section id="retention" className="scroll-mt-28">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                <Clock className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Data Retention</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              We keep your information as long as you're with us. Once you leave, we ensure your digital footprint is handled responsibly.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Active Accounts</AccordionTrigger>
                <AccordionContent>
                  Your data is stored for the duration of your subscription to provide historical analytics and context for the AI.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Deleted Accounts</AccordionTrigger>
                <AccordionContent>
                  If you close your account, we will delete or anonymize your personal data within 30 days, unless we are legally required to keep it.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Footer Card */}
          <section className="mt-32 pt-12 border-t">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Have questions?</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Our privacy team is here to help you understand your data rights and how we protect them.
              </p>
              <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all gap-2 group">
                Contact Privacy Team
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/20">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <Shield className="h-4 w-4" />
            <span className="font-bold">ynify</span>
            <span className="text-xs">© 2026</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-primary transition-colors">DPA</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

