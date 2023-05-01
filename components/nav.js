import { Link, useRouter, useSegments } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Nav() {
	const router = useRouter();
	const segments = useSegments();

	const lastSegment = segments.slice(-1);

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text
					style={[styles.subtitle, { marginBottom: 50 }]}
					onPress={() => router.back()}
				>
					← Back Button
				</Text>

				<Link href="/">
					<Text
						style={[
							styles.subtitle,
							{
								fontWeight: lastSegment == "" ? "bold" : "normal",
							},
						]}
					>
						Home
					</Text>
				</Link>

				<Text style={styles.subtitle}>|</Text>

				<Link href="/page-1-with-layout">
					<Text
						style={[
							styles.subtitle,
							{
								fontWeight:
									lastSegment == "page-1-with-layout" ? "bold" : "normal",
							},
						]}
					>
						|- Page 1 (with layout)
					</Text>
				</Link>

				<Link href="/page-1-with-layout/view-a-with-layout">
					<Text
						style={[
							styles.subtitle,
							{
								fontWeight:
									lastSegment == "view-a-with-layout" ? "bold" : "normal",
							},
						]}
					>
						|{"    "}|- View A (with layout)
					</Text>
				</Link>

				<Link href="/page-1-with-layout/view-b-no-layout">
					<Text
						style={[
							styles.subtitle,
							{
								fontWeight:
									lastSegment == "view-b-no-layout" ? "bold" : "normal",
							},
						]}
					>
						|{"    "}|- View B (no layout)
					</Text>
				</Link>

				<Text style={styles.subtitle}>|</Text>

				<Link href="/page-2-no-layout">
					<Text
						style={[
							styles.subtitle,
							{
								fontWeight:
									lastSegment == "page-2-no-layout" ? "bold" : "normal",
							},
						]}
					>
						|- Page 2 (no layout)
					</Text>
				</Link>

				<Link href="/page-2-no-layout/view-a-with-layout">
					<Text
						style={[
							styles.subtitle,
							{
								fontWeight:
									lastSegment == "view-a-with-layout" ? "bold" : "normal",
							},
						]}
					>
						|{"    "}|- View A (with layout)
					</Text>
				</Link>

				<Link href="/page-2-no-layout/view-b-no-layout">
					<Text
						style={[
							styles.subtitle,
							{
								fontWeight:
									lastSegment == "view-b-no-layout" ? "bold" : "normal",
							},
						]}
					>
						|{"    "}|- View B (no layout)
					</Text>
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		marginRight: 100,
	},
	main: {
		flex: 1,
		justifyContent: "center",
	},
	title: {
		fontSize: 34,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 28,
		color: "#38434D",
	},
});
