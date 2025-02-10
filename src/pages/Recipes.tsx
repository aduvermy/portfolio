import styled from 'styled-components';
import { PageTitle, Section } from '../components/UI/Section';
import { Card, CardTitle, CardContent } from '../components/UI/Card';
import { recipes } from '../data/recipes';

const RecipeCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const RecipeTitle = styled(CardTitle)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const VegIcon = styled.span`
  font-size: 1.2em;
`;

const RecipeSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;

  li {
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xs};

    &:before {
      content: "•";
      color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      left: 0;
    }
  }
`;

const OrderedList = styled.ol`
  padding-left: ${({ theme }) => theme.spacing.xl};
  
  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const Recipes = () => {
  return (
    <>
      <PageTitle>My Recipe Collection</PageTitle>
      
      <Section>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index}>
            <RecipeTitle>
              {recipe.title}
              {recipe.isVegetarian && <VegIcon>🌿</VegIcon>}
            </RecipeTitle>
            
            <CardContent>
              <RecipeSection>
                <h3>Ingredients</h3>
                <List>
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </List>
              </RecipeSection>

              <RecipeSection>
                <h3>Instructions</h3>
                <OrderedList>
                  {recipe.instructions.map((instruction, idx) => (
                    <li key={idx}>{instruction}</li>
                  ))}
                </OrderedList>
              </RecipeSection>
            </CardContent>
          </RecipeCard>
        ))}
      </Section>
    </>
  );
};
