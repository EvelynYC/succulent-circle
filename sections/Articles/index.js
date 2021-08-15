import SubTitle from '@components/SubTitle';

const Articles = () => {
  return (
    <div id="articles" style={{ textAlign: 'center', margin: '20px 0' }}>
      <SubTitle title="Articles" />
      <div
        style={{
          width: '200px',
          border: '1px rgba(170, 170, 170, 0.4) dashed',
          margin: '0 auto',
          padding: '12px 0',
        }}
      >
        <p>= 施工中 =</p>
        <p>敬請期待</p>
      </div>
    </div>
  );
};

export default Articles;
