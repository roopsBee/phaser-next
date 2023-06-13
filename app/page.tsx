import dynamic from 'next/dynamic';

const Game = dynamic(() => import('../components/Game'), { ssr: false });

export default function Home() {
	return (
		<main className="flex w-full flex-col items-center justify-between px-24">
			<Game />
		</main>
	);
}
