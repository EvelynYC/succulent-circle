import SubTitle from '@components/SubTitle';

const Articles = () => {
  return (
    <div id="articles" style={{ textAlign: 'center', margin: '20px 0' }}>
      <SubTitle title="Articles" />
      <div
        style={{
          width: '30%',
          border: '1px #aaa dashed',
          margin: '0 auto',
          padding: '18px 0',
        }}
      >
        <p>= 施工中 =</p>
        <p>敬請期待</p>
      </div>
    </div>
  );
};

export default Articles;
