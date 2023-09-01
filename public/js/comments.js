const commentFormHandler = async function (event) {
  console.log('commentFormHandler running')
  event.preventDefault();

  const post_id = document.querySelector('.new-comment-form').dataset.id;

  const text = document.querySelector('#comment').value.trim();
  if (text) {
      await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
              post_id,
              text,
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      document.location.reload();
  }
};

document.querySelector('.new-comment-form').addEventListener('submit', commentFormHandler);