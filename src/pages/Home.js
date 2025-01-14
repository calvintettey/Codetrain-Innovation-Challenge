// third-party
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
// components
import Layout from '../components/home/Layout';
import { Card } from '../components/home';
// others
import { AppContext } from '../context';
import { data as dummyData } from '../utils/dummy';

export default function Home() {
	const { dispatch } = useContext(AppContext);
	const [selectedCard, setSelectedCard] = useState(null);

	return (
		<Layout>
			<ProductsGrid>
				{dummyData.map(info => (
					<Card
						{...info}
						selected={selectedCard === info.id}
						onClick={() => setSelectedCard(prev => {
							const selection = prev !== info.id ? info : null;
							dispatch({
								type: 'preview_product',
								payload: selection
							})
							return selection?.id;
						})}
						key={info.id}
					/>
				))}
			</ProductsGrid>
		</Layout>
	);
}

const ProductsGrid = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: var(--pad-m);
	// display: grid;
	// grid-template-columns: repeat(auto-fit, minmmax());
`;
