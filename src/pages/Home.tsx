import { motion } from 'framer-motion';
import { 
  Bookmark,
  BookOpen, 
  Feather,
  FileText, 
  Library, 
  Settings, 
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Book3D } from '@/components/animations/Book3D';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "EPUB3.3 标准",
      description: "遵循国际出版标准，还原纸书般的阅读体验"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "极速转换",
      description: "如翻书般流畅，瞬间完成大文件处理"
    },
    {
      icon: <Feather className="h-6 w-6 text-primary" />,
      title: "精致排版",
      description: "字体、行距精心调校，呈现优雅的文字之美"
    },
    {
      icon: <Library className="h-6 w-6 text-primary" />,
      title: "智能目录",
      description: "自动识别章节，构建清晰的导读书签"
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "个性定制",
      description: "随心定制封面与元数据，打造专属藏书"
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "中文优化",
      description: "完美处理中文编码与标点，阅读无障碍"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "选择文本",
      desc: "上传 TXT 文件"
    },
    {
      num: "02",
      title: "调整版式",
      desc: "设置封面与参数"
    },
    {
      num: "03",
      title: "开始装订",
      desc: "智能转换处理"
    },
    {
      num: "04",
      title: "获取藏书",
      desc: "下载 EPUB 成品"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FDFBF7]">
      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <FadeIn delay={0.2} direction="up">
                <div className="inline-flex items-center space-x-2 border-b-2 border-accent/30 pb-1 mb-4">
                  <Bookmark className="h-4 w-4 text-accent" />
                  <span className="text-sm font-serif font-medium tracking-widest text-muted-foreground uppercase">The Art of Reading</span>
                </div>
              </FadeIn>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-primary leading-[1.1]">
                  <FadeIn delay={0.4}>
                    将文字<br/>
                    <span className="text-accent italic">装订</span> 成册
                  </FadeIn>
                </h1>
                
                <FadeIn delay={0.6}>
                  <p className="text-xl text-muted-foreground leading-relaxed font-serif italic max-w-xl mx-auto lg:mx-0">
                    "优雅地将您的纯文本文件转换为精美的 EPUB 电子书，重拾阅读的仪式感。"
                  </p>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-6 pt-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-[#FDFBF7] font-serif text-lg rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <Link to="/converter">
                    <BookOpen className="mr-2 h-5 w-5" />
                    开始制作
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 border-primary/20 hover:bg-primary/5 hover:border-primary/50 text-primary font-serif text-lg rounded-sm transition-all duration-300">
                  <Link to="https://github.com" target="_blank">
                    <Library className="mr-2 h-5 w-5" />
                    开源图书馆
                  </Link>
                </Button>
              </FadeIn>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <FadeIn delay={0.5} direction="left">
                <Book3D />
              </FadeIn>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 border-y border-border/40 bg-[#F9F7F1]/50" />
        <div className="container px-4 md:px-6 relative">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              工匠精神
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground font-serif italic">
              每一个细节都经过精心打磨，只为最纯粹的阅读体验
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index} className="h-full">
                <Card className="h-full bg-[#FDFBF7] border border-border/60 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-sm bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-serif font-bold text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground font-serif">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              制作流程
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.2} direction="up">
                <div className="relative group">
                  {/* Step Card */}
                  <div className="bg-white border border-border/60 p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 text-center relative z-10">
                    <div className="text-6xl font-serif font-bold text-primary/5 absolute top-4 left-0 right-0 select-none group-hover:text-accent/10 transition-colors">
                      {step.num}
                    </div>
                    <div className="relative pt-8 space-y-3">
                      <h3 className="text-xl font-serif font-bold text-primary">{step.title}</h3>
                      <p className="text-muted-foreground font-serif italic">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-border z-0" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-[#FDFBF7] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <FadeIn direction="up" className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              准备好开始制作您的<br/>
              <span className="text-accent">第一本电子书</span> 了吗？
            </h2>
            <p className="text-xl text-white/80 font-serif italic">
              无需繁琐的操作，让阅读回归纯粹。
            </p>
            <Button asChild size="lg" className="h-16 px-10 bg-[#FDFBF7] text-primary hover:bg-accent hover:text-primary font-serif text-lg font-bold rounded-sm shadow-xl transition-all duration-300">
              <Link to="/converter">
                立即开始制作
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
