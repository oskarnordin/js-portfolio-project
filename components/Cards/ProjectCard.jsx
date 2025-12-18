import styled from 'styled-components';

// Hero-like card design using local styled-components (safe, no external API calls)
const Card = styled.article`
  background: rgba(255,255,255,0.6);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  height: 100%;
  min-height: 350px;
  opacity: 0;
  transform: translateY(12px);
  animation: cardFadeIn 600ms ease-out forwards;
  box-shadow: var(--shadow-1);
  margin-bottom: 12px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 36px rgba(0,0,0,0.10);
  }

  @keyframes cardFadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardMedia = styled.div`
  width: 100%;
  height: 60px;
  background: transparent;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  img {
    transition: transform 0.4s ease;
    border-radius: 12px;
    width: 40px;
    height: 40px;
  }
`;

const CardBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 16px;
  color: #2E3647;
  font-family: var(--font-heading);
  align-self: center;
`;

const Description = styled.p`
  margin: 0;
  color: #2E3647;
  font-size: 14px;
  line-height: 1.2;
  flex: 0 0 auto;
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  padding: 8px 0;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: #3D4CFB;
  color: #ffffff;
  font-family: var(--font-mono);
  border: 1px solid var(--primary-color);
  padding: 6px 8px;
  border-radius: 8px;
  font-size: 12px;
`;

const CardFooter = styled.div`
  padding: 16px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

const Action = styled.a`
  background: #3D4CFB;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  font-family: var(--font-mono);

  &:hover {
    opacity: 0.8;
  }
`;

const ProjectCard = ({ title, description, stack = [], imgSrc, liveDemo, codeLink }) => {
  return (
    <Card className="project-card">
      <CardBody>
        <CardMedia>
          <img src={imgSrc} alt={`${title}`} />
        </CardMedia>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Tags>
          {stack.map((s, i) => (
            <Tag key={i}>{s}</Tag>
            
          ))}
        </Tags>
      </CardBody>
      <CardFooter>
        <div style={{ display: 'flex', gap: 8 }}>
          <Action href={codeLink} target="_blank" rel="noopener noreferrer">Code</Action>
          <Action href={liveDemo} target="_blank" rel="noopener noreferrer">Live</Action>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
