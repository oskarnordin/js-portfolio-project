import styled from 'styled-components';

// Hero-like card design using local styled-components (safe, no external API calls)
const Card = styled.article`
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  height: 100%;
  min-height: 420px;
  opacity: 0;
  transform: translateY(12px);
  animation: cardFadeIn 600ms ease-out forwards;

  &:hover {
    transform: translateY(-6px);
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
  height: 220px;
  background: transparent;
  display: block;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
    border-radius: 20px;
    padding: 12px;
  }
`;

const CardBody = styled.div`
  padding: 18px 18px 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 16px;
  color: #2E3647;
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
  background: #5438F7;
  color: #ffffff;
  padding: 6px 8px;
  border-radius: 8px;
  font-size: 12px;
`;

const CardFooter = styled.div`
  padding: 14px 18px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: #e7e7e7;
  border-radius: 16px;
`;

const Action = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: white;
`;

const Primary = styled(Action)`
  background: #5438F7;
  &:hover { opacity: 0.90; }
`;

const Secondary = styled(Action)`
  background: #5438F7;
  color: #ffffff;
  &:hover { opacity: 0.90; }
`;

const ProjectCard = ({ title, description, stack = [], imgSrc, liveDemo, codeLink }) => {
  return (
    <Card className="project-card">
      <CardMedia>
        {imgSrc ? <img src={imgSrc} alt={title} /> : null}
      </CardMedia>
      <CardBody>
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
          <Secondary href={codeLink} target="_blank" rel="noopener noreferrer">Code</Secondary>
          <Primary href={liveDemo} target="_blank" rel="noopener noreferrer">Live</Primary>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
