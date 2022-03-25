import Head from "next/head";
import Header from "../components/Header";
const API = process.env.API_KEY;
const CONTEXT = process.env.CONTEXT_KEY;
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
	console.log(results);
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{router.query.term} - Google Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<SearchResults results={results} />
		</div>
	);
}
export default Search;

export async function getServerSideProps(context) {
	const useDummyData = false;
	const startIndex = context.query.start || "0";

	const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API}&cx=${CONTEXT}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json());

	// After server has rendered... Pass the Results to the client
	return {
		props: {
			results: data,
		},
	};
}
