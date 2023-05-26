import Image from 'next/image';
import Game from '../components/Game';

export default function Home() {
	return (
		<main className="flex w-full flex-col items-center justify-between p-24">
			<Game />
		</main>
	);
}
