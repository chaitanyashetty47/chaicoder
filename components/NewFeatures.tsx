"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, type ComponentProps } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { SquareMousePointerIcon, GlobeIcon } from "lucide-react";

const LOGO_SLIDER_ITEMS = [
	{ src: "https://storage.efferd.com/logo/openai.svg", alt: "OpenAI" },
	{ src: "https://storage.efferd.com/logo/supabase.svg", alt: "Supabase" },
	{ src: "https://storage.efferd.com/logo/vercel.svg", alt: "Vercel" },
	{ src: "/lovable.png", alt: "Lovable" },
	{ src: "/cursor.png", alt: "Cursor"},
	{ src: "/coderabbit.png", alt: "Code Rabbit"},

];

type ChatMessage = { sender: "visitor" | "you"; message: string; time: string };

const CHAT_SCENARIOS: ChatMessage[][] = [
	[
		{
			sender: "you",
			message:
				"This week's Loom update is live",
			time: "6:12 PM",
		},

		{
			sender: "visitor",
			message: "Excellent. Looks solid. Great job!",
			time: "6:18 PM",
		},
	],
	[
		{
			sender: "visitor",
			message: "Can we adjust the signup flow slightly?",
			time: "7:44 PM",
		},
		{
			sender: "you",
			message:
				"Absolutely. Will revise it.",
			time: "7:47 PM",
		},
	],
	[
		{
			sender: "visitor",
			message: "Investors want a demo by Fri. Realistic?",
			time: "8:02 PM",
		},
		{
			sender: "you",
			message: "We'll focus on core flow, and get it done.",
			time: "8:05 PM",
		},
		
	],
];

const features = [
	{
		id: "setup",
		children: <SetupVisual hasDots />,
		className: "md:col-span-2",
	},
	{
		id: "user-based-security",
		children: <UserBasedSecurity hasDots />,
		className: "md:col-span-2",
	},
	{
		id: "reports",
		children: <ReportsVisual />,
		className: "sm:col-span-2 md:col-span-2",
	},
	{
		id: "dashboard",
		children: <DashboardVisual hasDots />,
		className: "sm:col-span-2 md:col-span-3 p-0",
	},
	{
		id: "presence",
		children: <PresenceVisual />,
		className: "sm:col-span-2 md:col-span-3 p-0",
	},
];

export function FeatureSection() {
	return (
		<section className="relative mx-auto w-full max-w-5xl px-4 md:px-1 mt-24" aria-labelledby="features-heading">
			<header className="mb-8 md:mb-10 text-center">
				<h2 id="features-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-3 md:mb-4">
					What Sets Us Apart
				</h2>
				<p className="text-base md:text-lg lg:text-xl text-text-dark max-w-2xl mx-auto">
					Building Products shouldn&apos;t feel messy, here&apos;s how we make it smooth.
				</p>
			</header>
			<div className="relative mx-auto grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-6">
				{features.map((feature) => (
					<FeatureCard className={feature.className} key={feature.id}>
						{feature.children}
					</FeatureCard>
				))}
			</div>
		</section>
	);
}

function FeatureCard({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"group relative overflow-hidden rounded-2xl border bg-background px-8 pt-8 pb-6",
				className
			)}
		>
			{children}
		</div>
	);
}

/** Visual section: icon/SVG area. Dots only appear here when hasDots=true. */
function FeatureVisualSection({
	children,
	hasDots = false,
	className,
}: {
	children: React.ReactNode;
	hasDots?: boolean;
	className?: string;
}) {
	return (
		<div className={cn("relative min-h-[8rem]", className)}>
			{hasDots && (
				<DottedGlowBackground
					pauseWhenOffScreen
					className="pointer-events-none"
					opacity={0.7}
					gap={14}
					radius={1.5}
					colorLightVar="--color-dot-teal"
					glowColorLightVar="--color-glow-teal"
					colorDarkVar="--color-dot-teal"
					glowColorDarkVar="--color-glow-teal"
					backgroundOpacity={0}
					speedMin={0.2}
					speedMax={1}
					speedScale={1}
				/>
			)}
			<div className="relative z-10">{children}</div>
		</div>
	);
}

/** Content section: headline + subheadline. Always plain, no dots. */
function FeatureContentSection({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn("relative mt-2 space-y-1.5 text-left", className)}>
			{children}
		</div>
	);
}

function FeatureTitle({ className, ...props }: React.ComponentProps<"h3">) {
	return (
		<h3
			className={cn("font-medium text-foreground text-lg", className)}
			{...props}
		/>
	);
}

function FeatureDescription({
	className,
	...props
}: React.ComponentProps<"p">) {
	return (
		<p className={cn("text-muted-foreground text-sm", className)} {...props} />
	);
}

function SetupVisual({ hasDots = false }: { hasDots?: boolean }) {
	return (
		<>
			<FeatureVisualSection hasDots={hasDots} className="flex h-[12rem] min-h-[12rem] justify-center">
				<div className="relative mx-auto flex size-32 items-center justify-center rounded-full border-4 border-dashed bg-background shadow-xs outline outline-border outline-offset-4">
					<div className="absolute inset-0 z-10 scale-120 bg-radial from-foreground/20 via-foreground/5 to-transparent blur-xl" />
					<RouteMapIcon className="size-24 fill-primary/90" />
				</div>
			</FeatureVisualSection>

			<FeatureContentSection>
				<FeatureTitle>Product Roadmap & Strategy</FeatureTitle>
				<FeatureDescription>
					We define scope, craft PRD, align features to business goals, and
					build a clear design, development, and deployment plan.
				</FeatureDescription>
			</FeatureContentSection>
		</>
	);
}

function UserBasedSecurity({ hasDots = false }: { hasDots?: boolean }) {
	return (
		<>
			<FeatureVisualSection hasDots={hasDots} className="flex h-[12rem] min-h-[12rem] justify-center">
				<div className="relative mx-auto flex size-32 items-center justify-center rounded-full border bg-background shadow-xs outline outline-border outline-offset-4">
					<AnimatedShieldCheckBadge className="size-24" />
					<div className="absolute inset-0 scale-120 bg-radial from-foreground/15 via-foreground/5 to-transparent blur-xl" />
				</div>
			</FeatureVisualSection>

			<FeatureContentSection>
				<FeatureTitle>Elite Security Standards</FeatureTitle>
				<FeatureDescription>
					We follow industry grade best practices to safeguard your product from
					vulnerabilities and threats, ensuring long-term stability.
					{/* From architecture to deployment, your
					platform is engineered with protection, compliance, and long-term
					stability in mind. */}
				</FeatureDescription>
			</FeatureContentSection>
		</>
	);
}

function ReportsVisual() {
	const [scenarioIndex, setScenarioIndex] = useState(0);
	const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
	const [showTyping, setShowTyping] = useState(false);

	useEffect(() => {
		const scenario = CHAT_SCENARIOS[scenarioIndex];
		setVisibleMessages([]);
		setShowTyping(true);

		const timeoutIds: ReturnType<typeof setTimeout>[] = [];

		// Typing indicator for 500ms before first message
		const typingHide = setTimeout(() => {
			setShowTyping(false);
			setVisibleMessages((prev) => [...prev, scenario[0]]);
		}, 500);
		timeoutIds.push(typingHide);

		// Remaining messages with staggered delays
		scenario.slice(1).forEach((msg, i) => {
			const delay = 900 + 900 * i;
			const id = setTimeout(() => {
				setVisibleMessages((prev) => [...prev, msg]);
			}, delay);
			timeoutIds.push(id);
		});

		const totalDuration = 4000;

		const loopTimeout = setTimeout(() => {
			setScenarioIndex((prev) => (prev + 1) % CHAT_SCENARIOS.length);
		}, totalDuration);

		timeoutIds.push(loopTimeout);

		return () => timeoutIds.forEach(clearTimeout);
	}, [scenarioIndex]);

	return (
		<>
			<FeatureVisualSection className="h-[12rem] min-h-[12rem]">
				<div className="relative mx-auto flex h-full w-full max-w-[280px] flex-col gap-4 overflow-hidden rounded-xl border bg-white/80 px-4 py-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] backdrop-blur-sm dark:bg-card/95 dark:border-border">
					<AnimatePresence mode="popLayout">
						{showTyping && (
							<motion.div
								key="typing"
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.25 }}
								className="flex justify-start"
							>
								<div className="flex gap-1 rounded-2xl border bg-background px-4 py-3 shadow-sm">
									<span className="size-1.5 rounded-full bg-muted-foreground/70 animate-bounce [animation-delay:0ms]" />
									<span className="size-1.5 rounded-full bg-muted-foreground/70 animate-bounce [animation-delay:150ms]" />
									<span className="size-1.5 rounded-full bg-muted-foreground/70 animate-bounce [animation-delay:300ms]" />
								</div>
							</motion.div>
						)}
						{visibleMessages.map((msg, index) => (
							<motion.div
								key={`${scenarioIndex}-${index}`}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.35, ease: "easeOut" }}
								className={cn(
									"flex",
									msg.sender === "you" ? "justify-end" : "justify-start"
								)}
							>
								<div
									className={cn(
										"max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
										msg.sender === "you"
											? "bg-primary text-primary-foreground"
											: "border border-border bg-background text-foreground"
									)}
								>
									<p>
										{msg.message}
										<span
											className={cn(
												"ml-1.5 text-[10px] whitespace-nowrap",
												msg.sender === "you"
													? "text-primary-foreground/70"
													: "text-muted-foreground"
											)}
										>
											{msg.time}
										</span>
									</p>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</FeatureVisualSection>

			<FeatureContentSection>
				<FeatureTitle>Async Collaboration</FeatureTitle>
				<FeatureDescription>
					From structured weekly Loom updates to fast turnarounds on small
					tweaks, we stay aligned throughout the journey. 
					
				</FeatureDescription>
			</FeatureContentSection>
		</>
	);
}

function DashboardVisual({ hasDots = false }: { hasDots?: boolean }) {
	return (
		<div className="grid h-full sm:grid-cols-2">
			<div className="relative z-10 space-y-6 py-8 ps-8 pe-2">
				<FeatureVisualSection className="min-h-0 mb-6">
					<div className="flex size-12 items-center justify-center rounded-full border bg-card shadow-xs outline outline-border/80 outline-offset-2">
						<SquareMousePointerIcon className="size-5 text-primary/80" />
					</div>
				</FeatureVisualSection>
				<FeatureContentSection className="mt-0 text-left">
					<FeatureTitle className="text-base">
						Sleek & Intuitive Design
					</FeatureTitle>
					<FeatureDescription>
						We design interfaces that feel natural, intuitive, and frictionless
						across every screen. Every interaction is thoughtfully considered so
						nothing important is overlooked.
					</FeatureDescription>
				</FeatureContentSection>
			</div>
			{/* Dashboard Screen - dots around the image */}
			<div className="mask-b-from-90% mask-r-from-90% relative aspect-video sm:aspect-auto">
				{hasDots && (
					<DottedGlowBackground
						pauseWhenOffScreen
						className="pointer-events-none"
						opacity={0.7}
						gap={14}
						radius={1.5}
						colorLightVar="--color-dot-teal"
						glowColorLightVar="--color-glow-teal"
						colorDarkVar="--color-dot-teal"
						glowColorDarkVar="--color-glow-teal"
						backgroundOpacity={0}
						speedMin={0.2}
						speedMax={1}
						speedScale={1}
					/>
				)}
				<div className="absolute -right-1 -bottom-1 z-10 aspect-video max-h-50 rounded-tl-md border bg-card p-1 sm:max-h-42 md:aspect-square md:max-h-50 lg:aspect-16/12">
					<div className="aspect-video h-full overflow-hidden rounded-tl-sm border *:pointer-events-none *:size-full *:shrink-0 *:select-none">
						<img
							alt="Dashboard preview"
							className="dark:hidden"
							height={360}
							src="/nova-dashboard.png"
							width={600}
						/>
						<img
							alt="Dashboard preview"
							className="hidden dark:block"
							height={360}
							src="https://storage.efferd.com/screen/dashboard-dark.webp"
							width={640}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function PresenceVisual() {
	return (
		<div className="grid sm:grid-cols-2 gap-2">
			<div className="space-y-6 pt-8 pb-4 px-8 sm:pb-8">
				<FeatureVisualSection className="min-h-0 flex items-center justify-start ">
					<div className="flex size-12 items-center justify-center rounded-full border bg-card shadow-xs outline outline-border/80 outline-offset-2">
						<AiWorkflowIcon className="size-8 text-primary/80" />
					</div>
				</FeatureVisualSection>
				<FeatureContentSection className="mt-0 text-center sm:text-left">
					<FeatureTitle className="text-base text-left md:whitespace-nowrap">
						AI-Powered Development
					</FeatureTitle>
					<FeatureDescription>
						We leverage modern AI tools like Cursor, Lovable, and Supabase to
						accelerate development, combined with proven engineering standards
						and experienced oversight.
						{/* Faster builds, without cutting corners. */}
					</FeatureDescription>
				</FeatureContentSection>
			</div>
			{/* Vertical infinite logo slider instead of globe */}
			<div className="flex h-[180px] min-h-0 gap-3 py-4 px-4 justify-center sm:h-[220px] md:h-[280px] md:gap-4">
				<InfiniteSlider
					direction="top"
					speed={40}
					gap={12}
					className="h-full flex-1 min-w-0"
				>
					{LOGO_SLIDER_ITEMS.slice(0, 3).map((item) => (
						<img
							key={item.alt}
							src={item.src}
							alt={item.alt}
							className="aspect-square w-14 shrink-0 rounded-lg object-contain sm:w-16 md:w-20"
						/>
					))}
				</InfiniteSlider>
				<InfiniteSlider
					direction="bottom"
					speed={40}
					gap={12}
					className="h-full flex-1 min-w-0"
				>
					{LOGO_SLIDER_ITEMS.slice(3).map((item) => (
						<img
							key={`reverse-${item.alt}`}
							src={item.src}
							alt={item.alt}
							className="aspect-square w-14 shrink-0 rounded-lg object-contain sm:w-16 md:w-20"
						/>
					))}
				</InfiniteSlider>
			</div>
		</div>
	);
}

function AiWorkflowIcon(props: ComponentProps<"svg">) {
	return (
		<svg
			viewBox="0 0 400 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			{...props}
		>
			<g>
				<path
					d="M97.8357 54.6682C177.199 59.5311 213.038 52.9891 238.043 52.9891C261.298 52.9891 272.24 129.465 262.683 152.048C253.672 173.341 100.331 174.196 93.1919 165.763C84.9363 156.008 89.7095 115.275 89.7095 101.301"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M98.3318 190.694C-10.6597 291.485 121.25 273.498 148.233 295.083"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M98.3301 190.694C99.7917 213.702 101.164 265.697 100.263 272.898"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M208.308 136.239C208.308 131.959 208.308 127.678 208.308 123.396"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M177.299 137.271C177.035 133.883 177.3 126.121 177.3 123.396"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M203.398 241.72C352.097 239.921 374.881 226.73 312.524 341.851"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M285.55 345.448C196.81 341.85 136.851 374.229 178.223 264.504"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M180.018 345.448C160.77 331.385 139.302 320.213 120.658 304.675"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M218.395 190.156C219.024 205.562 219.594 220.898 219.594 236.324"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M218.395 190.156C225.896 202.037 232.97 209.77 241.777 230.327"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M80.1174 119.041C75.5996 120.222 71.0489 119.99 66.4414 120.41"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M59.5935 109.469C59.6539 117.756 59.5918 125.915 58.9102 134.086"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M277.741 115.622C281.155 115.268 284.589 114.823 287.997 114.255"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M291.412 104.682C292.382 110.109 292.095 115.612 292.095 121.093"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M225.768 116.466C203.362 113.993 181.657 115.175 160.124 118.568"
					stroke="currentColor"
					strokeOpacity="0.9"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
}

function AnimatedShieldCheckBadge(props: ComponentProps<"svg">) {
  const shieldPath =
    "M8 .262S6.364 3 2 3c0 9.31 6 12.594 6 12.594S14 12.31 14 3C9.636 3 8 .262 8 .262z";
  const checkPath = "M5.2 8.8 L7.2 10.8 L11 6.8";

  const checkmarkControls = useAnimation();

  React.useEffect(() => {
    let cancelled = false;
    const run = async () => {
      while (!cancelled) {
        await checkmarkControls.start({
          pathLength: 1,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, 900));
        if (cancelled) break;
        await checkmarkControls.start({
          pathLength: 0,
          opacity: 0,
          transition: { duration: 0.25 },
        });
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, 450));
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [checkmarkControls]);

  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      <defs>
        <clipPath id="shieldClipAnimated">
          <path d={shieldPath} />
        </clipPath>
        <radialGradient
          id="glassGradientAnimated"
          cx="35%"
          cy="5%"
          r="65%"
          fx="35%"
          fy="5%"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0.45" />
          <stop offset="50%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shield Base */}
      <path
        d={shieldPath}
        className="fill-primary stroke-primary"
        strokeWidth="0.4"
      />
      <path
        d="M3.5 8.5 C5.5 12 10.5 12 12.5 8.5 C11.5 13 9 14.5 8 15 C7 14.5 4.5 13 3.5 8.5Z"
        className="fill-primary/40"
      />
      <g clipPath="url(#shieldClipAnimated)">
        <rect
          x="0"
          y="0"
          width="16"
          height="16"
          fill="url(#glassGradientAnimated)"
        />
      </g>
      <motion.path
        d={checkPath}
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        pathLength="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={checkmarkControls}
      />
    </svg>
  );
}





const ROUTE_CHECK_PATH_START = "M 34 170 L 38 174 L 46 166"; // on start node (40,170)
const ROUTE_CHECK_PATH_FIRST = "M 144 170 L 148 174 L 156 166"; // on middle node (150,170)
const ROUTE_CHECK_PATH_SECOND = "M 82 120 L 86 124 L 94 116"; // on middle node (88,120)
const ROUTE_CHECK_PATH_END = "M 154 70 L 158 74 L 166 66"; // on end node (160,70)

export function RouteMapIcon(props: ComponentProps<"svg">) {
  const checkStart = useAnimation();
  const checkFirst = useAnimation();
  const checkSecond = useAnimation();
  const checkEnd = useAnimation();
  const locationMarker = useAnimation();

  React.useEffect(() => {
    let cancelled = false;
    const run = async () => {
      while (!cancelled) {
        // Reset checkmarks
        await Promise.all([
          checkStart.start({ pathLength: 0, opacity: 0 }),
          checkFirst.start({ pathLength: 0, opacity: 0 }),
          checkSecond.start({ pathLength: 0, opacity: 0 }),
          checkEnd.start({ pathLength: 0, opacity: 0 }),
        ]);
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, 200));

        // Subtle emphasis on start (location marker)
        locationMarker.start({
          scale: 1.08,
          transition: { duration: 0.25, ease: "easeOut" },
        });
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, 400));

        // Start node gets checkmark (first step on path)
        await checkStart.start({
          pathLength: 1,
          opacity: 1,
          transition: { duration: 0.45, ease: "easeInOut" },
        });
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, 350));

        // First middle circle gets checkmark (walk to first middle node)
        await checkFirst.start({
          pathLength: 1,
          opacity: 1,
          transition: { duration: 0.45, ease: "easeInOut" },
        });
        locationMarker.start({ scale: 1, transition: { duration: 0.2 } });
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, 400));

        // Second middle circle gets checkmark (walk to second middle node)
        await checkSecond.start({
          pathLength: 1,
          opacity: 1,
          transition: { duration: 0.45, ease: "easeInOut" },
        });
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, 400));

        // End node gets checkmark (reach destination)
        await checkEnd.start({
          pathLength: 1,
          opacity: 1,
          transition: { duration: 0.45, ease: "easeInOut" },
        });
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, 900));
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [checkStart, checkFirst, checkSecond, checkEnd, locationMarker]);

  return (
    <svg
      viewBox="0 0 220 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      {/* Complete Solid S-Curve Path */}
      <path
        d="M 59 170 L 150 170 A 25 25 0 0 0 150 120 L 88 120 A 25 25 0 0 1 88 70 L 140 70"
        className="stroke-primary"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* --- Solid Circles (Nodes) --- */}
      <circle cx="40" cy="170" r="10" className="fill-primary" />
      <circle
        cx="40"
        cy="170"
        r="16"
        className="stroke-primary"
        fill="none"
        strokeWidth={1.8}
      />
      <circle cx="150" cy="170" r="13" className="fill-primary" />
      <circle cx="88" cy="120" r="13" className="fill-primary" />
      <circle cx="160" cy="70" r="10" className="fill-primary" />
      <circle
        cx="160"
        cy="70"
        r="16"
        className="stroke-primary"
        fill="none"
        strokeWidth={1.8}
      />

      {/* Checkmarks on all nodes (walking-the-path sequence) */}
      <motion.path
        d={ROUTE_CHECK_PATH_START}
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        pathLength="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={checkStart}
      />
      <motion.path
        d={ROUTE_CHECK_PATH_FIRST}
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        pathLength="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={checkFirst}
      />
      <motion.path
        d={ROUTE_CHECK_PATH_SECOND}
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        pathLength="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={checkSecond}
      />
      <motion.path
        d={ROUTE_CHECK_PATH_END}
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        pathLength="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={checkEnd}
      />

      {/* Bottom Left: Location Marker (subtle pulse at start of path) */}
      <g transform="translate(17, 95) scale(0.1)">
        <motion.g initial={{ scale: 1 }} animate={locationMarker}>
          <path
            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            className="fill-primary"
          />
        </motion.g>
      </g>

      {/* Top Right: Flag (waving cloth) */}
      <g transform="translate(145.6, 0.6) scale(2.5)">
        {/* Flag pole (static) */}
        <path
          d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z"
          className="fill-primary"
        />

        {/* Flag cloth (waving) */}
        <motion.path
          d="M6.5 3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.5582 3.87329C14.9831 4.44323 16.5513 4.54967 18.0401 4.17746C18.6711 4.01972 19.1778 4.7036 18.8432 5.26132L17.5647 7.39221C17.2232 7.96137 17.0524 8.24595 17.0119 8.55549C16.9951 8.68461 16.9951 8.81539 17.0119 8.94451C17.0524 9.25405 17.2232 9.53863 17.5647 10.1078L19.1253 12.7089C19.4361 13.2269 19.1582 13.898 18.5721 14.0445L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6"
          className="fill-primary"
          style={{ transformOrigin: "6.5px 8px" }}
          animate={{ rotate: [0, 3, -2, 0] }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </g>
    </svg>
  );
}





