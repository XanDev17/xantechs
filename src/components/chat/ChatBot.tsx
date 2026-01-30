import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses: Record<string, string> = {
  greeting: "Hello! 👋 I'm the XANTECHS assistant. I can help you learn about our services, pricing, and how we can transform your business. What would you like to know?",
  services: "We offer a comprehensive range of digital solutions:\n\n• **Web Development** - Custom websites & web applications\n• **Mobile Apps** - iOS & Android development\n• **AI Solutions** - Machine learning & automation\n• **Cloud Services** - Scalable infrastructure\n• **UI/UX Design** - Beautiful, intuitive interfaces\n• **Digital Marketing** - SEO, PPC & social media\n\nWhich service interests you most?",
  web: "Our **Web Development** services include:\n\n• Custom website design & development\n• E-commerce solutions\n• Progressive Web Apps (PWA)\n• CMS development (WordPress, Strapi, etc.)\n• API development & integration\n\nWe use modern technologies like React, Next.js, and Node.js. Would you like to discuss a project?",
  mobile: "Our **Mobile App Development** covers:\n\n• Native iOS apps (Swift)\n• Native Android apps (Kotlin)\n• Cross-platform apps (React Native, Flutter)\n• App maintenance & updates\n• App Store optimization\n\nWe build apps that users love! Interested in building an app?",
  ai: "Our **AI & Machine Learning** solutions include:\n\n• Custom AI chatbots & assistants\n• Predictive analytics\n• Natural Language Processing\n• Computer vision solutions\n• Process automation\n\nWe can help automate your business processes with intelligent solutions!",
  pricing: "Our pricing is tailored to each project's needs. Generally:\n\n• **Landing Pages**: Starting from $1,500\n• **Business Websites**: $3,000 - $15,000\n• **Web Applications**: $10,000 - $50,000+\n• **Mobile Apps**: $15,000 - $100,000+\n\nEvery project is unique! Let's discuss your specific requirements for an accurate quote.",
  process: "Our development process follows 6 key phases:\n\n1. **Discovery** - Understanding your vision\n2. **Research** - Market & competitor analysis\n3. **Strategy** - Planning the roadmap\n4. **Development** - Building your solution\n5. **Testing** - Quality assurance\n6. **Launch** - Deployment & support\n\nWe keep you involved at every step!",
  contact: "Ready to start your project? Here's how to reach us:\n\n📧 **Email**: hello@xantechs.com\n📞 **Phone**: +1 (555) 123-4567\n💬 **Response Time**: Within 24 hours\n\nYou can also fill out the contact form on this page, and we'll get back to you promptly!",
  timeline: "Project timelines vary based on complexity:\n\n• **Landing Pages**: 1-2 weeks\n• **Business Websites**: 3-6 weeks\n• **Web Applications**: 2-4 months\n• **Mobile Apps**: 3-6 months\n\nWe always provide realistic timelines and keep you updated on progress.",
  technologies: "We work with cutting-edge technologies:\n\n**Frontend**: React, Next.js, Vue.js, TypeScript\n**Backend**: Node.js, Python, Go\n**Mobile**: React Native, Flutter, Swift, Kotlin\n**Cloud**: AWS, Google Cloud, Azure\n**AI/ML**: TensorFlow, PyTorch, OpenAI\n\nWe choose the best tech stack for your needs!",
  about: "**XANTECHS** is a digital innovation agency dedicated to transforming businesses through technology.\n\n✨ **Our Mission**: Deliver exceptional digital solutions\n🎯 **Our Approach**: Client-focused, quality-driven\n🌍 **Location**: Remote-first, serving clients worldwide\n💪 **Experience**: Years of combined expertise\n\nWe're passionate about turning ideas into reality!",
  fallback: "I'm not sure I understand that fully. Here are some topics I can help with:\n\n• Our **services** (web, mobile, AI)\n• **Pricing** information\n• Our development **process**\n• **Contact** details\n• **Timeline** estimates\n\nOr you can contact us directly at hello@xantechs.com!"
};

const findResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.match(/^(hi|hello|hey|greetings|good morning|good afternoon)/)) {
    return botResponses.greeting;
  }
  if (lowerInput.match(/(service|offer|do you do|what do you|help me with)/)) {
    return botResponses.services;
  }
  if (lowerInput.match(/(web|website|site|landing page|ecommerce|e-commerce)/)) {
    return botResponses.web;
  }
  if (lowerInput.match(/(mobile|app|ios|android|phone)/)) {
    return botResponses.mobile;
  }
  if (lowerInput.match(/(ai|artificial intelligence|machine learning|ml|automation|chatbot)/)) {
    return botResponses.ai;
  }
  if (lowerInput.match(/(price|pricing|cost|budget|how much|rate|quote)/)) {
    return botResponses.pricing;
  }
  if (lowerInput.match(/(process|how do you work|methodology|approach|steps)/)) {
    return botResponses.process;
  }
  if (lowerInput.match(/(contact|reach|email|phone|call|talk|get in touch)/)) {
    return botResponses.contact;
  }
  if (lowerInput.match(/(time|timeline|how long|duration|deadline)/)) {
    return botResponses.timeline;
  }
  if (lowerInput.match(/(tech|technology|stack|framework|tools|languages)/)) {
    return botResponses.technologies;
  }
  if (lowerInput.match(/(about|who are you|company|team|xantechs)/)) {
    return botResponses.about;
  }
  
  return botResponses.fallback;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: botResponses.greeting,
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = findResponse(input);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    { label: "Our Services", query: "What services do you offer?" },
    { label: "Pricing", query: "What are your prices?" },
    { label: "Contact", query: "How can I contact you?" }
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110",
          isOpen && "rotate-90"
        )}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card border border-border rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="gradient-primary p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground">XANTECHS Assistant</h3>
              <p className="text-xs text-primary-foreground/80">Always here to help</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-background/50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-2",
                message.isBot ? "justify-start" : "justify-end"
              )}
            >
              {message.isBot && (
                <div className="w-8 h-8 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                  message.isBot
                    ? "bg-secondary text-secondary-foreground rounded-tl-none"
                    : "gradient-primary text-primary-foreground rounded-tr-none"
                )}
              >
                <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
              </div>
              {!message.isBot && (
                <div className="w-8 h-8 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
                  <User className="w-4 h-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-2 justify-start">
              <div className="w-8 h-8 rounded-full gradient-primary flex-shrink-0 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-secondary rounded-2xl rounded-tl-none px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <button
                key={action.label}
                onClick={() => {
                  setInput(action.query);
                  setTimeout(() => handleSend(), 100);
                }}
                className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-background border-border"
              disabled={isTyping}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              size="icon"
              className="gradient-primary shadow-glow"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
