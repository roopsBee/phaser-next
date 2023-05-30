import Image from 'next/image';
import dynamic from 'next/dynamic';

const Game = dynamic(() => import('../components/Game'), { ssr: false });

export default function Home() {
	return (
		<main className="flex w-full flex-col items-center justify-between p-24">
			<Game />
		</main>
	);
}
